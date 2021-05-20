import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import axios from 'axios';

admin.initializeApp(functions.config().firebase);
dotenv.config();

const firestore = admin.firestore();

exports.createUser = functions.firestore
  .document('people/{personID}')
  .onCreate(async (snap, context) => {
    const newValue = snap.data();
    const isHuman = await validateHuman(newValue.token);
    console.log('isHuman:', isHuman);
    if (!isHuman) {
      firestore.collection('people').doc(context.params.personID).delete();
    }
  });

async function validateHuman(response: string): Promise<boolean> {
  const secret = process.env.CAPTCHA_SECRET_KEY;
  try {
    const {
      data,
    } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        secret,
        response,
      }
    );
    console.log('Site Verify Response Received')
    console.log('data: ',  data)

    return data.success;
  } catch ({ message }) {
    console.log(message);
    return false;
  }
}

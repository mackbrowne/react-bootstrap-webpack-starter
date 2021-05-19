import * as functions from "firebase-functions";
require('dotenv').config()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createUser = functions.firestore
    .document('people/{personID}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      async function validateHuman(token: string): Promise<boolean> {
        const secret = process.env.CAPTCHA_SECRET_KEY
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret${secret}&response${token}`,
        {
            method: 'POST'
        })
        const data = await response.json()
        console.log('data:', data)


        return false;
      }
      const newValue = snap.data();

      // access a particular field as you would any JS property
      const name = newValue.name;

      // perform desired operations ...
    });
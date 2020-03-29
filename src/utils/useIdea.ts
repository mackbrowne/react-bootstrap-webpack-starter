import { useState, useEffect } from 'react';
import { firestore } from 'firebase/app';

export default () => {
  const [docState, setDocState] = useState({
    isLoading: true,
    data: { title: null, label: null }
  });

  useEffect(() => {
    const ideasCollection = firestore().collection('ideas');

    return ideasCollection
      .where(firestore.FieldPath.documentId(), '>=', ideasCollection.doc().id)
      .limit(1)
      .onSnapshot(result => {
        if (!result.empty) {
          const { title, label } = result.docs[0].data();
          setDocState({
            isLoading: false,
            data: {
              title,
              label
            }
          });
        }
      });
  }, []);

  return docState;
};

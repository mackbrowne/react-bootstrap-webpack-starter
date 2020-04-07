import { useState, useEffect } from 'react';
import { firestore } from 'firebase/app';

export default () => {
  const [docState, setDocState] = useState({
    isLoading: true,
    data: { title: null, description: null }
  });

  useEffect(() => {
    const ideasCollection = firestore().collection('ideas');

    const randomIdea = fallback =>
      ideasCollection
        .where('approved', '==', true)
        .where(firestore.FieldPath.documentId(), '>=', ideasCollection.doc().id)
        .limit(1)
        .onSnapshot(result => {
          if (!result.empty) {
            const { title, description } = result.docs[0].data();
            setDocState({
              isLoading: false,
              data: {
                title,
                description
              }
            });
          } else {
            fallback();
          }
        });

    randomIdea(randomIdea(() => console.error('No Results')));
  }, []);

  return docState;
};

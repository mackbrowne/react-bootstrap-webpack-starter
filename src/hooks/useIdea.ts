import { useState, useEffect } from 'react';
import { firestore } from 'firebase/app';

export default () => {
  const [docState, setDocState] = useState({
    isLoading: true,
    data: { title: null, description: null }
  });

  useEffect(() => {
    const ideasCollection = firestore().collection('ideas');

    const randomIdea = (lowValue, operator, fallback) =>
      ideasCollection
        .where(firestore.FieldPath.documentId(), operator, lowValue)
        .where('approved', '==', true)
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

    const { id } = ideasCollection.doc();
    randomIdea(
      id,
      '>=',
      randomIdea(id, '<=', () => console.error('No Results'))
    );
  }, []);

  return docState;
};

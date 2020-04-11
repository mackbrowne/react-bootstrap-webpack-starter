import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from 'firebase/app';

const defaultState = {
  isLoading: true,
  data: { title: null, description: null, url: null, slug: null }
};

type defaultStateType = {
  isLoading: boolean;
  data: { title: string; description: string; url: string; slug: string };
};

export const IdeaContext = createContext<defaultStateType>(defaultState);

const IdeaProvider = ({ children }) => {
  const { slug: slugParam } = useParams();
  const [docState, setDocState] = useState(defaultState);

  useEffect(() => {
    const ideasCollection = firestore().collection('ideas');

    const getOne = (targetField, operator, targetValue) =>
      ideasCollection
        .where(targetField, operator, targetValue)
        .limit(1)
        .get();

    const onResult = result => {
      if (result.empty) throw Error('no results');
      else {
        const { title, description, url, slug } = result.docs[0].data();
        console.log(slug);
        setDocState({
          isLoading: false,
          data: {
            title,
            description,
            url,
            slug
          }
        });
      }
    };

    (async () => {
      try {
        if (slugParam) {
          const result = await getOne('slug', '==', slugParam);
          onResult(result);
        } else {
          const { id } = ideasCollection.doc();
          try {
            const result = await getOne(
              firestore.FieldPath.documentId(),
              '>=',
              id
            );
            onResult(result);
          } catch {
            const fallbackResult = await getOne(
              firestore.FieldPath.documentId(),
              '<=',
              id
            );
            onResult(fallbackResult);
          }
        }
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, [slugParam]);

  return (
    <IdeaContext.Provider value={docState}>{children}</IdeaContext.Provider>
  );
};

export default IdeaProvider;

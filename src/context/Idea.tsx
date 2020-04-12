import React, { createContext, useState, useCallback } from 'react';
import { firestore } from 'firebase/app';
type SetStateAction = (prevState: string) => void;
type IdeaData = {
  title: string;
  description: string;
  url: string;
  slug: string;
};

const defaultState = {
  isLoading: true,
  data: { title: null, description: null, url: null, slug: null }
};

const defaultActions = {
  getIdea: slug => {}
};

type defaultStateType = {
  isLoading: boolean;
  data: IdeaData;
};

type actions = {
  getIdea: (slug?: string) => void;
};

export const IdeaContext = createContext<defaultStateType & actions>({
  ...defaultState,
  ...defaultActions
});

const IdeaProvider = ({ children }) => {
  const [docState, setDocState] = useState(defaultState);

  const getIdea = useCallback(slug => {
    setDocState(oldDocState => ({
      ...oldDocState,
      isLoading: true
    }));

    const ideasCollection = firestore().collection('ideas');

    const getOne = (targetField, operator, targetValue) =>
      ideasCollection
        .where(targetField, operator, targetValue)
        .limit(1)
        .get();

    const onResult = result => {
      console.log('result');
      if (result.empty) throw Error('no results');

      const data = result.docs[0].data() as IdeaData;
      setDocState({
        isLoading: false,
        data
      });
    };

    (async () => {
      const getRandom = async () => {
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
      };

      try {
        if (slug) {
          try {
            const result = await getOne('slug', '==', slug);
            onResult(result);
          } catch (error) {
            getRandom();
          }
        } else {
          await getRandom();
        }
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, []);

  return (
    <IdeaContext.Provider value={{ ...docState, getIdea }}>
      {children}
    </IdeaContext.Provider>
  );
};

export default IdeaProvider;

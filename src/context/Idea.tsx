import React, { createContext, useState, useCallback } from 'react';
import { firestore } from 'firebase/app';
import { logPageView } from '../hooks/useAnalytics';

type SetStateAction = (prevState: string) => void;
type IdeaData = {
  title: string;
  description: string;
  url: string;
  slug: string;
};

const defaultState = {
  isLoading: true,
  title: null,
  description: null,
  url: null,
  slug: null
};

const defaultActions = {
  getIdea: async slug => {},
  resetIdea: () => {}
};

type defaultStateType = {
  isLoading: boolean;
  title: string;
  description: string;
  url: string;
  slug: string;
};

type actions = {
  getIdea: (slug?: string) => void;
  resetIdea: () => void;
};

export const IdeaContext = createContext<defaultStateType & actions>({
  ...defaultState,
  ...defaultActions
});

const IdeaProvider = ({ children }) => {
  const [docState, setDocState] = useState(defaultState);

  const resetIdea = useCallback(() => setDocState(defaultState), []);

  const getIdea = useCallback(async slug => {
    setDocState(oldState => ({ ...oldState, isLoading: true }));

    const ideasCollection = firestore().collection('ideas');
    const getOne = (targetField, operator, targetValue, approved = true) => {
      let result = ideasCollection as firebase.firestore.Query;
      if (approved) result = result.where('approved', '==', true);
      return result
        .where(targetField, operator, targetValue)
        .limit(1)
        .get();
    };

    const getRandom = async () => {
      const { id } = ideasCollection.doc();
      const docId = firestore.FieldPath.documentId();

      let result = await getOne(docId, '>=', id);
      if (result.empty) result = await getOne(docId, '<=', id);
      return result;
    };

    try {
      let result;
      if (slug) {
        result = await getOne('slug', '==', slug, false);
      }
      if (!result || result.empty) result = await getRandom();
      if (result.empty) throw Error('no results');

      const data = result.docs[0].data() as IdeaData;
      setDocState({
        isLoading: false,
        ...data
      });
      logPageView(`/${data.slug}`);
    } catch ({ message }) {
      console.error(message);
    }
  }, []);

  return (
    <IdeaContext.Provider value={{ ...docState, getIdea, resetIdea }}>
      {children}
    </IdeaContext.Provider>
  );
};

export default IdeaProvider;

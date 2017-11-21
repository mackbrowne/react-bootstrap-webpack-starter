import InitReducer, {
  DEFAULT_STATE,
  INIT,
  initializeAsyncStateWorker,
  initSaga,
  initAppSuccess
} from '../init';

//Testing
import { testSaga } from 'redux-saga-test-plan';

describe('test init action', () => {
  describe('init reducer', () => {
    it('should return the initial state', () => {
      const result = InitReducer();
      expect(result).toEqual(DEFAULT_STATE);
    });

    it('should handle INIT', () => {
      const mockAction = { type: INIT };
      const result = InitReducer(DEFAULT_STATE, mockAction);
      const expected = DEFAULT_STATE;
      expect(result).toEqual(expected);
    });
  });

  describe('Init Worker', () => {
    it('works normally', () => {
      testSaga(initializeAsyncStateWorker, {})
        .next()
        .put(initAppSuccess())
        .next()
        .isDone();
    });
  });

  describe('Init Watcher', () => {
    it('works normally', () => {
      testSaga(initSaga)
        .next()
        .takeEveryEffect(INIT, initializeAsyncStateWorker)
        .finish()
        .isDone();
    });
  });
});

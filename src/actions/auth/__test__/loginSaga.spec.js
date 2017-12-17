import { loginSaga } from '../login';

//Testing
import { testSaga } from 'redux-saga-test-plan';

describe('Login Watcher', () => {
  it('works normally', () => {
    testSaga(loginSaga)
      .next()
      .finish()
      .isDone();
  });
});

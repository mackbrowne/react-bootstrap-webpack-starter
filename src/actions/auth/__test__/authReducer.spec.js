import AuthReducer, {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  DEFAULT_STATE
} from '../login';

describe('login reducer', () => {
  it('should return the initial state', () => {
    const result = AuthReducer();
    expect(result).toEqual(DEFAULT_STATE);
  });

  it('should handle login', () => {
    const mockAction = { type: LOGIN };
    const result = AuthReducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE
    };
    expect(result).toEqual(expected);
  });

  it('should handle successful login', () => {
    const mockAction = { type: LOGIN_SUCCESS };
    const result = AuthReducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      isLoggedIn: true
    };
    expect(result).toEqual(expected);
  });

  it('should handle Login error', () => {
    const mockAction = { type: LOGIN_ERROR };
    const result = AuthReducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      isLoggedIn: false
    };
    expect(result).toEqual(expected);
  });
});

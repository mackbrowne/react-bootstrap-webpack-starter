import NavbarReducer, { TOGGLE_NAVBAR, DEFAULT_STATE } from '../navbar';

describe('navbar reducer', () => {
  it('should return the initial state', () => {
    const result = NavbarReducer();
    expect(result).toEqual(DEFAULT_STATE);
  });

  it('should handle TOGGLE_NAVBAR close', () => {
    const mockAction = { type: TOGGLE_NAVBAR };
    const result = NavbarReducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      isOpen: true
    };
    expect(result).toEqual(expected);
  });

  it('should handle TOGGLE_NAVBAR open', () => {
    const mockAction = { type: TOGGLE_NAVBAR };
    let result = NavbarReducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      isOpen: true
    };
    expect(result).toEqual(expected);

    result = NavbarReducer(expected, mockAction);

    const nextExpected = {
      ...DEFAULT_STATE,
      isOpen: false
    };
    expect(result).toEqual(nextExpected);
  });
});

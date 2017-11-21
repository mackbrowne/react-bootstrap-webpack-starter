import rootReducer from '../rootReducer';

import InitReducer from '../ui/init';
import NavbarReducer from '../ui/navbar';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      init: InitReducer(),
      navbar: NavbarReducer()
    };
    expect(rootReducer()).toEqual(expected);
  });
});

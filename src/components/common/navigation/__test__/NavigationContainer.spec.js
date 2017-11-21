import { mapStateToProps, mapDispatchToProps } from '../NavigationContainer';
import { TOGGLE_NAVBAR } from '../../../../actions/ui/navbar';

describe('HomeContainer', () => {
  it('should test mapStateToProps', () => {
    const isOpen = true;
    const inputState = {
      navbar: {
        isOpen
      }
    };
    expect(mapStateToProps(inputState).isOpen).toBe(isOpen);
  });

  it('should test mapDispatchToProps', () => {
    const inputDispatch = jest.fn();
    const { toggle } = mapDispatchToProps(inputDispatch);
    const expectedEvent = { type: TOGGLE_NAVBAR };
    toggle();
    expect(inputDispatch).toHaveBeenCalledWith(expectedEvent);
  });
});

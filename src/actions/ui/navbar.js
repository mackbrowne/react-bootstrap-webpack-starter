// Actions
export const TOGGLE_NAVBAR = 'UI/TOGGLE_NAVBAR';

export const DEFAULT_STATE = {
  isOpen: false
};

// Reducer
export default function NavbarReducer(state = DEFAULT_STATE, action = '') {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
}

// Action Creator
export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR
});

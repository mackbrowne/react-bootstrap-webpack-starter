// Actions
const TOGGLE_NAVBAR = "UI/TOGGLE_NAVBAR";

// Reducer
export default function NavbarReducer(
  state = {
    isOpen: false
  },
  action = {}
) {
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

// Actions
export const SET_INPUT_VALUE = 'AUTH/SET_INPUT_VALUE';

/*** Action Creators ***/
export const setInputValue = ({ target: { name, value } }) => ({
  type: SET_INPUT_VALUE,
  name,
  value
});

/*** Reducer ***/
export const DEFAULT_STATE = {};

export default function InputReducer(
  state = DEFAULT_STATE,
  { name, value, type } = {}
) {
  switch (type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
}

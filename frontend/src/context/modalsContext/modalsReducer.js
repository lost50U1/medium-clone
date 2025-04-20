export const initialState = {
  signIn: false,
  signUp: false,
};

export function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, [action.payload]: true };
    case "CLOSE_MODAL":
      return { ...state, [action.payload]: false };
    case "TOGGLE_MODAL":
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return state;
  }
}

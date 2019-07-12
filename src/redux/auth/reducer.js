
// Set initial state
const initialState = {
  loginData: {},
  resetData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'login_ref': {
      const input = action;
      return {
        ...state,
        loginData: input,
        resetData: {}
      };
    }
    case 'reset_ref': {
      const input = action;
      return {
        ...state,
        resetData: input,
        loginData: {}
      };
    }

    default:
      return state;
  }
}


// Set initial state
const initialState = {
  notificationData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'notificationRef': {
        const input = action;
        return {
          ...state,
          notificationData: input
        };
    }

    default:
      return state;
  }
}

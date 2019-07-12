
// Set initial state
const initialState = {
  profileData: {},
  UpdateProfileData: {},
  designationData: {},
  statusData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'getProfile_ref': {
        const input = action;
        return {
          ...state,
          profileData: input,
          UpdateProfileData: {}
        };
    }
    case 'updateProfile_ref': {
        const input = action;
        return {
          ...state,
          UpdateProfileData: input,
          profileData: {}
        };
    }
    case 'designationRef': {
        const input = action;
        return {
          ...state,
          designationData: input,
        };
    }
    case 'statusRef': {
        const input = action;
        return {
          ...state,
          statusData: input,
        };
    }

    default:
      return state;
  }
}

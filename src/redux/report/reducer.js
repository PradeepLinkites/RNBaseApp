
// Set initial state
const initialState = {
  postReportData: {},
  reportData: {},
  ImageData: {},
  ImageProData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'postReport_ref': {
        const input = action;
        return {
          ...state,
          postReportData: input,
        };
    }
    case 'reportRef': {
      const input = action;
      return {
        ...state,
        reportData: input,
      };
    }
    case 'imageProRef': {
      const input = action;
      return {
        ...state,
        ImageProData: input,
      };
    }
    case 'resetRef': {
      return {
        ...state,
        postReportData: {},
      };
    }

    case 'resetReportRef': {
      return {
        ...state,
      reportData: {}
      };
    }

    case 'imageRef': {
      const input = action;
      return {
        ...state,
        ImageData: input,
      };
    }   

    case 'resetImageRef': {
      return {
        ...state,
        ImageData: {}
      };
    }

    default: return state;
  }
}

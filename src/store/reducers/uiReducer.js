const initialState = {
  openedModal: null,
  signUp: {},
  success: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_ALL_MODALS':
      return { ...state, openedModal: false, success: false };
    case 'OPEN_MODAL':
      return {
        ...state,
        openedModal: action.payload,
      };
    case 'SIGNUP_REQUEST': {
      return { ...state };
    }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signUp: action.payload,
        success: true,
        error: null,
      };
    case 'SIGNUP_FAIL':
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;

const initialState = {
  openedModal: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_ALL_MODALS':
      return { ...state, openedModal: false };
    case 'OPEN_MODAL':
      return {
        ...state,
        openedModal: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;

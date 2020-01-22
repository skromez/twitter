import { TOGGLE_MODAL } from "../types";

const initialState = {
  modal: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: state.modal === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;

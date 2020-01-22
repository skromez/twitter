import { TOGGLE_MODAL } from '../types';

export const toggleModal = (modalType) => ({
  type: TOGGLE_MODAL,
  payload: modalType,
});

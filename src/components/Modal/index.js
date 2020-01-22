import React from 'react';
import { connect } from 'react-redux';
import ModalBody from './style';
import { closeAllModals } from '../../store/actions/actions';

const Modal = ({ children, size, closeModals }) => (
  <ModalBody size={size} className="modal">
    <div className="modal__container">
      <button
        type="button"
        className="modal__button modal__button--icon"
        onClick={closeModals}
      >
        <i className="far fa-times-circle" />
      </button>
      {children}
    </div>
  </ModalBody>
);

const mapStateToProps = (state) => state.ui;
const mapDispatchToProps = (dispatch) => ({
  closeModals: () => dispatch(closeAllModals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

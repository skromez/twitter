import React from 'react';
import { connect } from 'react-redux';
import ModalBody from './style';
import * as actions from '../../actions/actions';

const Modal = ({ children, size, CLOSE_ALL_MODALS }) => (
  <ModalBody size={size} className="modal">
    <div className="modal__container">
      <button
        type="button"
        className="modal__button modal__button--icon"
        onClick={CLOSE_ALL_MODALS}
      >
        <i className="far fa-times-circle" />
      </button>
      {children}
    </div>
  </ModalBody>
);

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, actions)(Modal);

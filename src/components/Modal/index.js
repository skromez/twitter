import React from 'react';
import { connect } from 'react-redux';
import ModalBody from './style';
import { signUpNotification } from '../../store/actions/userActions';
import { toggleModal } from '../../store/actions/uiActions';

const Modal = (props) => {
  const { children, size, handleModal } = props;

  return (
    <ModalBody size={size} className="modal">
      <div className="modal__container">
        <button
          type="button"
          className="modal__button modal__button--icon"
          onClick={handleModal}
        >
          <i className="far fa-times-circle" />
        </button>
        {children}
      </div>
    </ModalBody>
  );
};

const mapStateToProps = (state) => state.ui;
const mapDispatchToProps = (dispatch) => ({
  signUpNotifications: () => dispatch(signUpNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

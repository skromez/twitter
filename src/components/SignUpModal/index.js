import React from 'react';
import Modal from '../Modal';
import SignUp from '../SignUp';
import { toggleModal } from '../../store/actions/uiActions';
import { connect } from 'react-redux';

const SignUpModal = ({ closeModal }) => (
  <Modal handleModal={closeModal} size="smallModal">
    <SignUp />
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(toggleModal('signUp')),
});

export default connect(null, mapDispatchToProps)(SignUpModal);

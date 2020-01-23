import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import SignUp from '../SignUp';
import { toggleModal } from '../../store/actions/uiActions';

const SignUpModal = ({ closeModal }) => (
  <Modal handleModal={closeModal} size="smallModal">
    <SignUp />
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(toggleModal('signUp')),
});

export default connect(null, mapDispatchToProps)(SignUpModal);

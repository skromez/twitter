import React from 'react';
import { connect } from 'react-redux';
import sticker from '../../assets/images/join-us/sticker.png';
import JoinBody from './style';
import Button from '../Button';
import { toggleModal } from '../../store/actions/uiActions';

const Join = ({ onSignUpClick }) => (
  <JoinBody>
    <img src={sticker} alt="Sticker" />
    <h2 className="join__heading">
      Hey!
      <br />
      Why don't you join us?
    </h2>
    <p className="join__text">
      It's simple - just click on sign up
      <br />
      button!
    </p>
    <Button
      onClick={onSignUpClick}
      type="button"
      className="join__button"
      filled="true"
      size="105px"
    >
      Sign Up
    </Button>
  </JoinBody>
);

const mapDispatchToProps = (dispatch) => ({
  onSignUpClick: () => dispatch(toggleModal('signUp')),
});

export default connect(null, mapDispatchToProps)(Join);

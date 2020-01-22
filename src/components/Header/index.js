import React from 'react';
import { connect } from 'react-redux';
import { HeaderBody, HeaderContainer } from './style';
import Logo from '../Logo';
import Button from '../Button';
import { toggleModal } from '../../store/actions/uiActions';
import Avatar from '../Avatar';
import User from '../User';
import UserAvatar from '../../assets/images/profile/avatar.jpg';
import { signOutUser } from '../../store/actions/userActions';

const Header = (props) => {
  const { info, toggleLogin, toggleSignUp, onSignOutClick, isLoggedIn } = props;
  return (
    <HeaderBody className="header">
      <HeaderContainer size="normal" padding="normal">
        <Logo />
        <div className="header__wrapper">
          {isLoggedIn ? (
            <>
              <Avatar avatar={UserAvatar} className="header__avatar" size="normal" />
              <User name={info.firstName} className="header__username" />
              <button
                onClick={onSignOutClick}
                className="header__button header__button--logout"
              >
                <i className="fas fa-sign-out-alt header__icon"></i>
              </button>
            </>
          )
            : (
              <>
                <Button
                  onClick={toggleLogin}
                  type="button"
                  className="header__button header__button--login"
                  size="105px"
                  filled="false"
                >
                  Login
                </Button>
                <Button
                  onClick={toggleSignUp}
                  type="button"
                  className="header__button header__button--signup"
                  size="105px"
                  filled="true"
                >
                  Sign Up
                </Button>
              </>
            )}
        </div>
      </HeaderContainer>
    </HeaderBody>
  );
};

const mapStateToProps = ({ user: { info } }) => ({
  isLoggedIn: Boolean(info.id),
  info,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleModal('login')),
  toggleSignUp: () => dispatch(toggleModal('signUp')),
  onSignOutClick: () => dispatch(signOutUser()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);

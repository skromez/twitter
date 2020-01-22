import React from 'react';
import { connect } from 'react-redux';
import { HeaderBody, HeaderContainer } from './style';
import Logo from '../Logo';
import Button from '../Button';
import { openModal } from '../../store/actions/actions';
// import Avatar from '../Avatar';
// import User from '../User';
// import UserAvatar from '../../assets/images/profile/avatar.jpg';


const Buttons = ({ toggleModal }) => {
  return (
    <>
      <Button
        onClick={() => toggleModal('login')}
        type="button"
        className="header__button header__button--login"
        size="105px"
        filled="false"
      >
        Login
      </Button>
      <Button
        onClick={() => toggleModal('signUp')}
        type="button"
        className="header__button header__button--signup"
        size="105px"
        filled="true"
      >
        Sign Up
      </Button>
    </>
  );
};

// const Profile = () => {
//   return (
//     <>
//       <Avatar avatar={UserAvatar} className="header__avatar" size="normal" />
//       <User name={'test'} className="header__username" />
//       <button
//         className="header__button header__button--logout"
//       >
//         <i className="fas fa-sign-out-alt header__icon"></i>
//       </button>
//     </>
//   );
// };

const Header = (props) => {
  const { toggleModal } = props;
  return (
    <HeaderBody className="header">
      <HeaderContainer size="normal" padding="normal">
        <Logo />
        <div className="header__wrapper">
          <Buttons toggleModal={toggleModal} />
        </div>
      </HeaderContainer>
    </HeaderBody>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggleModal: (type) => dispatch(openModal(type)),
});
export default connect((mapStateToProps), mapDispatchToProps)(Header);

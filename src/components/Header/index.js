import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import queryString from 'query-string';
import { HeaderBody, HeaderContainer } from './style';
import Input from '../Input';
import Logo from '../Logo';
import Button from '../Button';
import { toggleModal } from '../../store/actions/uiActions';
import Avatar from '../Avatar';
import UserAvatar from '../../assets/images/profile/avatar.svg';
import { getOthersData, signOutUser } from '../../store/actions/userActions';
import { searchTweetsByHashtag } from '../../store/actions/searchActions';

const Header = ({ info, toggleLogin, toggleSignUp, onSignOutClick, isLoggedIn, getUserData, onSearchFormSubmit }) => {
  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    onSearchFormSubmit(location.search);
  }, []);

  return (
    <HeaderBody className="header">
      <HeaderContainer size="normal" padding="normal">
        <Logo />
        <Formik
          initialValues={{
            search: parsed.term ? parsed.term : '',
          }}
          onSubmit={({ search }, { resetForm }) => {
            onSearchFormSubmit(`?term=${search}`);
            history.push(`/search?term=${search}`);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="header__form" onSubmit={handleSubmit}>
              <Input
                defaultValue={values.search}
                name="search"
                type="text"
                onBlur={handleBlur}
                value={values.search}
                onChange={handleChange}
                placeholder="Search in Gucciter"
                className="header__input"
              />
            </form>
          )}
        </Formik>
        <div className="header__wrapper">
          {isLoggedIn ? (
            <>
              <Avatar avatar={UserAvatar} className="header__avatar" size="normal" />
              <Link
                onClick={() => {
                  getUserData(info.login);
                }}
                to={`/user/${info.login}`}
              >
                <div className="header__username">{info.firstName}</div>
              </Link>
              <button
                type="button"
                onClick={onSignOutClick}
                className="header__button header__button--logout"
              >
                <i className="fas fa-sign-out-alt header__icon" />
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

const mapStateToProps = ({ user: { info }, search }) => ({
  isLoggedIn: Boolean(info.id),
  info,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleModal('login')),
  toggleSignUp: () => dispatch(toggleModal('signUp')),
  onSignOutClick: () => dispatch(signOutUser()),
  getUserData: (login) => dispatch(getOthersData(login)),
  onSearchFormSubmit: (query) => dispatch(searchTweetsByHashtag(query)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);

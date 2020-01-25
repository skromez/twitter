import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';
import LoginBody from './style';
import Error from '../Error';
import Spinner from '../Spinner';
import { toggleModal } from '../../store/actions/uiActions';
import { loginUser } from '../../store/actions/userActions';

const Login = (props) => {
  const LoginSchema = Yup.object({
    login: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .required('Login required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required('Password required'),
  });


  const {
    loginError,
    loading,
    closeModal,
    onLoginSubmitClick,
  } = props;

  const content = (
    <LoginBody>
      <h2 className="login__header">Already signed up?</h2>
      {loginError ? <h1 className="login__error">{loginError}</h1> : null}
      <Formik
        initialValues={{
          login: '',
          password: '',
          checkbox: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={(info) => {
          onLoginSubmitClick({ login: info.login, password: info.password }, info.checkbox);
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="login__form form-login">
            <div className="login__wrapper">
              <Input
                border={errors.login === undefined && '1px border red'}
                placeholder="Login"
                id="login"
                name="login"
                type="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
              {touched.login && errors.login ? (
                <Error>{errors.login}</Error>
              ) : null}
            </div>
            <div className="login__wrapper">
              <Input
                border={errors.password === undefined && '1px border red'}
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password ? (
                <Error>{errors.password}</Error>
              ) : null}
            </div>
            <label className="form-login__label">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onBlur={handleBlur}
                value={values.checkbox}
                onChange={handleChange}
                className="form-login__checkbox"
              />
              <span className="form-login__checkmark" />
              Remember me
            </label>
            <Button
              className="login__button"
              size="100%"
              type="submit"
              filled="true"
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </LoginBody>
  );

  return (
    <Modal handleModal={closeModal} size="smallModal" className="modal">
      {loading ? <Spinner /> : content}
    </Modal>
  );
};

const mapStateToProps = (state) => state.user;
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(toggleModal('login')),
  onLoginSubmitClick: (credentials, checkbox) => dispatch(loginUser(credentials, checkbox)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

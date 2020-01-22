import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';
import LoginBody from './style';
import Error from '../Error';
import { loginUser } from '../../store/actions/actions';
import Spinner from '../Spinner';

const Login = (props) => {
  const LoginSchema = Yup.object({
    login: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .required('Login required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .required('Password required'),
  });
  const { loginError, loading } = props;

  const content = (
    <LoginBody>
      <h2 className="login__header">Already signed up?</h2>
      {loginError ? <h1 className="login__error">{loginError}</h1> : null}
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(info) => {
          props.loginUser(info);
        }}>
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
              <input type="checkbox" className="form-login__checkbox" />
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
    <Modal size="smallModal" className="modal">
      {loading ? <Spinner /> : content}
    </Modal>
  );
};

const mapStateToProps = (state) => state.user;
const mapDispatchToProps = (dispatch) => ({
  loginUser: (info) => dispatch(loginUser(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

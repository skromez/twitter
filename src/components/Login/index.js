import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';
import LoginBody from './style';
import Error from '../Error';

class Login extends Component {

  render() {
    const LoginSchema = Yup.object({
      login: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Login required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Password required'),
    });

    return (
      <Modal size="smallModal" className="modal">
        <LoginBody>
          <h2 className="login__header">Already signed up?</h2>
          <Formik
            initialValues={{
              login: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
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
      </Modal>
    );
  }
};
export default Login;

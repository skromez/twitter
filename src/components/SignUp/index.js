import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import SignUpBody, { SuccessBody } from './style';
import * as actions from '../../store/actions/actions';
import Error from '../Error';

const Success = () => (
  <SuccessBody>
    <p className="succes__title">You've successfully registered!</p>
    <p className="success__text">Please login.</p>
  </SuccessBody>
);

class SignUp extends Component {
  render() {
    const { success, error } = this.props.state;
    console.log(error, success);
    const SignUpScheme = Yup.object({
      firstName: Yup.string()
        .min(5, 'Must be 5 characters or more'),
      lastName: Yup.string()
        .min(2, 'Must be 2 characters or more'),
      login: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Login required'),
      location: Yup.string()
        .min(2, 'Must be 2 characters or more'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Password required'),
    });

    const content = (
      <SignUpBody>
        <h1 className="signup__heading">Sign Up</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            login: '',
            location: '',
            password: '',
          }}
          validationSchema={SignUpScheme}
          onSubmit={(info) => {
            this.props.createUser(info);
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
            <form className="signup__form form" onSubmit={handleSubmit}>
              <div className="signup__wrapper">
                <Input
                  border={errors.firstName === undefined && '1px solid red'}
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {touched.firstName && errors.firstName ? (
                  <Error>{errors.firstName}</Error>
                ) : null}
              </div>
              <div className="signup__wrapper">
                <Input
                  border={errors.lastName === undefined && '1px border red'}
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName ? (
                  <Error>{errors.lastName}</Error>
                ) : null}
              </div>
              <div className="signup__wrapper">
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
              <div className="signup__wrapper">
                <Input
                  border={errors.location === undefined && '1px border red'}
                  placeholder="Location"
                  id="location"
                  name="location"
                  type="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                />
                {touched.location && errors.location ? (
                  <Error>{errors.location}</Error>
                ) : null}
              </div>
              <div className="signup__wrapper">
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
              <Button
                className="signup__button"
                size="100%"
                type="submit"
                filled="true"
              >
                Sign Up
              </Button>
            </form>
          )}
        </Formik>
        {error ? <h1 className="signup__error">{error}</h1> : null}
      </SignUpBody>
    );
    return (
      <>
        {success ? <Success /> : content}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(SignUp);

import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import SignUpBody from './style';

const SignUpContent = () => (
  <SignUpBody>
    <div className="signup__container">
      <h1 className="signup__heading">Sign Up</h1>
      <form className="signup__form form">
        <Input className="signup__input" placeholder="First Name" />
        <Input className="signup__input" placeholder="Last Name" />
        <Input className="signup__input" placeholder="Nickname" />
        <Input className="signup__input" placeholder="Location" />
        <Button
          className="signup__button"
          type="submit"
          size="100%"
          filled="true"
        >
          Sign Up
        </Button>
      </form>
    </div>
  </SignUpBody>
);

class SignUp extends Component {
  state = {
    shown: false
  };

  render() {
    const { shown } = this.state;
    const content = shown ?  <SignUpContent /> : null;
    return (
      <>
        {content}
      </>
    )
  }
}

export default SignUp;

import styled from 'styled-components';

const LoginBody = styled.section`
  position: relative;

  .login__header {
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
    margin-bottom: 10px;
  }

  .login__form {
    display: flex;
    flex-direction: column;
  }

  .login__button {
    padding: 6.5px 30px;
    
    &--icon {
      position: absolute;
      border: none;
      background: transparent;
  
      padding: 5px;
      margin: 0;
  
      font-size: 28px;
      color: var(--white);
      
      top: 0;
      right: -45px;
    }
  }

  .login__input {
    margin-bottom: 15px;
  }

  .form-login__label {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 11px;
    margin-bottom: 20px;
    padding-left: 20px;
    user-select: none;
  }

  .form-login__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .form-login__checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 15px;
    width: 15px;
    background-color: var(--white);
    border-radius: 2px;
    border: 1px solid var(--gray);
  }

  .form-login__label:checked ~,
  .form-login__checkmark {
    background-color: #2196f3;
  }

  .form-login__checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  .form-login__label
    // eslint-disable-next-line prettier/prettier
    .form-login__checkbox:checked~ .form-login__checkmark::after {
    display: block;
  }

  .form-login__label .form-login__checkmark:after {
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid var(--gray);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  .login__wrapper {
    position: relative;
  }
  .login__error {
    position: absolute;
    bottom: -17px;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: red;
`;

export default LoginBody;

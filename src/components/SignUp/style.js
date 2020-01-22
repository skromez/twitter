import styled from 'styled-components';

const SignUpBody = styled.section`
  position: relative;

  .signup__heading {
    margin-bottom: 25px;

    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--gray);
  }
  
  .signup__error {
    position: absolute;
    top: -20px;
    
    width: 100%;
    text-align: center;
    font-size: 12px;

    color: red;
  }

  .signup__input {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  .signup__button {
    margin-top: 10px;
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

  .form {
    display: flex;
    flex-direction: column;
  }
  
  .signup__wrapper {
    position: relative;
  }
`;

export const SuccessBody = styled.div`
    text-align: center;
    
    color: #11bc8c;
    font-weight: 700;
    
    .success__text {
      margin-top: 15px;
    }
`;

export default SignUpBody;

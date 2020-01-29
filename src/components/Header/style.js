import styled from 'styled-components';
import Container from '../Container/style';

export const HeaderBody = styled.header`
  position: relative;
  background: var(--white);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header__wrapper {
    display: flex;
    align-items: center;
    min-width: 240px;
    justify-content: center;
  }

  .header__button {
    &--signup {
      margin-left: 25px;
    }
    &--logout {
      border: none;
      background-color: transparent;
    }
  }
  
  .header__username {
   color: var(--blue);
   font-weight: 700;
   margin-left: 20px;
   
   a {
    display: none;
   }
  }
  
  .header__form {
    margin-left: 120px;
  
    min-width: 670px;
  }
  
  .header__input {
    margin-bottom: 0;
  }
  
  .header__avatar {
    border-radius: 50px;
  }
  
  .header__icon {
    color: var(--blue);
    font-size: 30px;
    margin-left: 15px;
  }
`;

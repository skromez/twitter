import styled, { css } from 'styled-components';

const bigModal = css`
  border-radius: 8px;
  .modal__container {
    width: 605px;
    padding: 40px 40px 40px 30px;
  }
`;
const smallModal = css`
  .modal__container {
    padding: 15px 15px 20px;
  }
`;

const ModalBody = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.4);
  
   ${(props) => {
    switch (props.size) {
      case 'smallModal':
        return smallModal;
      case 'bigModal':
        return bigModal;
      default:
        return '';
    }
  }}
   
   .modal__container {
     background-color: #ffffff;
     position: relative;
     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
     border-radius: 4px;
   }
  
  .modal__button {
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
`;

export default ModalBody;

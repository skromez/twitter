import styled from 'styled-components';

const TweetFormBody = styled.div`
  .tweet-form {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .tweet-form__input {
   min-height: 80px;
   resize: none;
   
   padding-left: 10px;
   padding-top: 8px;
   
   font-family: inherit;
   font-size: 14px;
   line-height: 15px;
   
   border-radius: 3px;
   border: ${(props) => {
    switch (props.border) {
      case false:
        return '1px solid red';
      default:
        return '1px solid #e6ecf0';
    }
  }}; 
   
   &::placeholder {
     color: rgba(102, 117, 127, 0.25);
   }
  }
  
  .tweet-form__button {
    align-self: flex-end;
    margin-top: 10px;
  }
  
  .tweet-form__wrapper {
    position: absolute;
    bottom: 15px;
    
    min-height: 35px;
  }
  
  .tweet-form__error {
  
    color: #fa2a2a;
    
    font-size: 11px;
    line-height: 11px; 
  }
`;

export default TweetFormBody;

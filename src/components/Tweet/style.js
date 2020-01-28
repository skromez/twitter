import styled from 'styled-components';

const TweetBody = styled.div`
  display: flex;
  background: var(--white);
  padding: 10px;
  
  &:hover {
    .tweet__button {
      &-change {
        display: block;
      }
      &-delete {
        display: block;
      }
    }
  }

  &:not(:last-child) {
    border-bottom: 2px solid var(--bg);
  }

  .tweet__text {
    font-size: 14px;
    line-height: 20px;
    color: var(--black);
    
    margin-left: 2px;
    margin-top: 2px;
  }

  .tweet__container {
    display: flex;
  }

  .tweet__avatar {
    margin-right: 20px;
  }

  .tweet__user {
    margin-right: 5px;
  }

  .tweet__data {
    margin-left: 15px;
  }
  
  .tweet__buttons {
    margin-left: auto;
    display: flex;
  }
    
  .tweet__button {
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    color: var(--blue);

    
    &-change {
      display: none;
      margin-right: 10px;
    }
    &-delete {
      display: none;
    }
  }
  
  .tweet__info {
    min-width: 582px;
  }
  
  .form {
    position: relative;
    
    display: flex;
    flex-direction: column;
  }
  
  .form__input {
    font-family: inherit;
    font-size: 14px;
    line-height: 20px;
    resize: none;
    width: 100%;
    border: none;
    border-radius: 3px;
    background: var(--bg);
  }
  
  .form__wrapper {
    position: absolute;
    min-height: 35px;
    bottom: -6px;
  }
  
  .form__error {
 
    color: #fa2a2a;
    
    font-size: 11px;
    line-height: 11px; 
  }
  
  .form__button {
    margin-top: 5px;
    padding: 3px 13px;
    margin-left: auto;
  }
`;

export default TweetBody;

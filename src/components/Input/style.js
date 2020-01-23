import styled from 'styled-components';

const InputBody = styled.input`
  min-height: 30px;
  padding-left: 10px;
  border-radius: 3px;
  width: 100%;
  
  border: ${(props) => {
    switch (props.border) {
      case false:
        return '1px solid red';
      default:
        return '1px solid #e6ecf0';
    }
  }};

  &::placeholder {
    color: #e6ecf0;
  }
  margin-bottom: 15px;
  
`;

export default InputBody;

import styled from 'styled-components';

const DataBody = styled.div`
  position: relative;
  display: flex;

  .data__text {
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
  }
  
  svg {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
  }
`;

export default DataBody;

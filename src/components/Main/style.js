import styled from 'styled-components';
import Container from '../Container/style';

export const MainBody = styled.main`
  margin-top: 2px;

  .feed {
    max-width: 670px;
    position: relative;

    @media (max-width: 850px) {
      margin-top: 80px;
    }
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
  
  .feed_tweets {
    margin-top: 20px;
    min-width: 670px;
    min-height: 520px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    position: relative;
    top: -95px;
    align-items: center;
    padding: 0;
  }

  @media (max-width: 400px) {
    top: -20px;
  }
`;

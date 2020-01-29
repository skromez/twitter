import styled from 'styled-components';

export const SearchBody = styled.main`
  margin-top: 2px;

  .search__feed {
  
    max-width: 670px;
    margin: 0 auto;

    @media (max-width: 850px) {
      margin-top: 80px;
    }
  }
  
  .search__tweets {
    margin-top: 10px;
  }
  
  .search__loader {
    max-width: 200px;
  }
  
  .search__wrapper {
    margin-top: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }
  
  .search__term {
    background: var(--white);
    
    font-size: 24px;
    font-weight: 700;
  
    padding: 20px;
  }
  
  .search__not-found {
    background: var(--white);
    text-align: center;
  }
  
  .search__error {
    margin-top: 10px;
    
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  
    font-size: 24px;
    font-weight: 700;
    padding: 20px;
  }
`;

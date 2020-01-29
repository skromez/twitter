import styled from 'styled-components';

const TweetModalBody = styled.section`

  .tweet__wrapper {
    display: flex;
    align-items: center;
  }

  .tweet__avatar {
    margin-right: 20px;
  }

  .tweet__text {
    margin-top: 30px;

    font-size: 27px;
    line-height: 32px;
    letter-spacing: 0.027em;

    color: var(--black);
  }

  .tweet__data {
    margin-top: 25px;

    svg {
      display: none;
    }
  }

  .tweet__thumb {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .likes {
    margin-top: 25px;
    min-height: 40px;

    display: flex;   align-items: center;

    border-top: 1px solid #e6ecf0;
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 0;
  }

  .likes__amount {
    margin-right: 15px;
    margin-left: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: var(--black);

    span {
      margin-left: 5px;
      font-weight: 400;
      color: var(--gray);
    }
  }
  .data__icon {
    display: none;
  }
`;

export default TweetModalBody;

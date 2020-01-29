import styled, { css } from 'styled-components';

const big = css`
  width: 210px;
  height: 210px;
  border: 5px solid var(--white);
  background: var(--white);

  @media (max-width: 1100px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 400px) {
    width: 85px;
    height: 85px;
  }
`;

const normal = css`
  width: 48px;
  height: 48px;
`;

const small = css`
  width: 18px;
  height: 18px;
`;

const AvatarBody = styled.div`
  img {
    border-radius: 100px;

    ${(props) => {
    switch (props.size) {
      case 'big':
        return big;
      case 'normal':
        return normal;
      case 'small':
        return small;
      default:
        return '';
    }
  }}
  }
`;

export default AvatarBody;

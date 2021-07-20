import styled, { css } from 'styled-components/macro';
import { media } from 'styles';

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 540px;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
  ${media.tablet`
    max-width: 720px;
  `}
  ${media.desktop`
    max-width: 960px;
  `}
  ${media.largeDesktop`
    max-width: 1140px;
  `}
  padding: 0 15px;
  width: 100%;
`;

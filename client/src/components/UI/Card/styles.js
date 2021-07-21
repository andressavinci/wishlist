import styled from 'styled-components/macro';
import { media } from 'styles';

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.lightgrey};
  border-radius: 8px;
  margin-bottom: 40px;
  max-width: 352px;
  ${media.phone`
    width: 272px;
  `}
  ${media.tablet`
    margin-right: 24px;
    width: 280px;
  `}
  ${media.desktop`
    width: 220px;
  `}
  ${media.largeDesktop`
    width: 240px;
  `}
  padding: 24px;
  text-align: center;
`;

export const CardImage = styled.img`
  height: auto;
  width: 100%;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  word-wrap: break-word;
`;

export const CardPrice = styled.h3`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin: 40px 0;
`;

import styled from 'styled-components/macro';
import { media } from 'styles';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.rebeccapurple};
  padding: 32px 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
  `}
  width: 100%;
`;

export const HeaderLogoWrapper = styled.div`
  ${media.tablet`
    width: 25%;
    text-align: left;
  `}
  text-align: center;
  width: 100%;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  ${media.tablet`
    margin-top: 0;
  `}
  width: 100%;
`;

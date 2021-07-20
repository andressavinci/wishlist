import styled from 'styled-components/macro';
import { media } from 'styles';

export const LinksWrapper = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  ${media.phone`
    flex-direction: row;
  `}
  padding: 0;
  width: 100%;

  li {
    align-items: center;
    display: flex;
    margin: 0 0 16px 0;

    > [data-icon='box-icon'] {
      fill: ${({ theme }) => theme.colors.white};
      height: 20px;
      margin-right: 4px;
    }
  }
`;

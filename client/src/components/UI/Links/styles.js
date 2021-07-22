import styled from 'styled-components/macro';
import { media, Mixins } from 'styles';

const { resetList } = Mixins;

export const LinksWrapper = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  justify-content: space-between;
  ${media.phone`
    flex-direction: row;
  `}
  ${resetList};
  width: 100%;
`;

export const LinksItem = styled.li`
  margin: 0 0 16px 0;

  > a {
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;

    [data-icon='box-icon'] {
      fill: ${({ theme }) => theme.colors.white};
      height: 20px;
      margin-right: 4px;
    }
  }
`;

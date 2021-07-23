import styled from 'styled-components/macro';
import { Mixins } from 'styles';

const { resetList } = Mixins;

export const WishlistCardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${resetList};
`;

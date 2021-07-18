import React from 'react';
import { Links, Logo, Search } from 'components/UI';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer data-testid="MN_HEADER">
      <Logo />
      <S.HeaderWrapper>
        <Links />
        <Search />
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;

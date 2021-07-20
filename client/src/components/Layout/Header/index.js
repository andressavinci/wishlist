import React from 'react';
import { Container, Links, Logo, Search } from 'components/UI';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header data-testid="MN_HEADER">
      <Container as="section" direction="row">
        <S.HeaderContainer>
          <S.HeaderLogoWrapper>
            <Logo />
          </S.HeaderLogoWrapper>
          <S.HeaderContentWrapper>
            <Links />
            <Search />
          </S.HeaderContentWrapper>
        </S.HeaderContainer>
      </Container>
    </S.Header>
  );
};

export default Header;

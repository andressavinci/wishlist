import React from 'react';
import { array } from 'prop-types';
import { Breadcrumb, Container, Links, Logo, Search } from 'components/UI';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Header = ({ breadcrumbItems }) => {
  return (
    <S.Header data-testid="MN_HEADER">
      <S.HeaderContainer>
        <Container as="section" direction="row">
          <S.HeaderWrapper>
            <S.HeaderLogoWrapper>
              <Link to={'/'} title="MagaNets">
                <Logo />
              </Link>
            </S.HeaderLogoWrapper>
            <S.HeaderContentWrapper>
              <Links />
              <Search />
            </S.HeaderContentWrapper>
          </S.HeaderWrapper>
        </Container>
      </S.HeaderContainer>
      {breadcrumbItems?.length && (
        <S.HeaderBreadcrumbWrapper>
          <Container as="section">
            <Breadcrumb items={breadcrumbItems} />
          </Container>
        </S.HeaderBreadcrumbWrapper>
      )}
    </S.Header>
  );
};

Header.propTypes = {
  breadcrumbItems: array,
};

Header.defaultProps = {
  breadcrumbItems: [],
};

export default Header;

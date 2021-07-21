import React from 'react';
import * as S from './styles';

const Search = () => {
  return (
    <S.SearchContainer data-testid="MN_SEARCH">
      <S.SearchInputWrapper>
        <box-icon data-icon="box-icon" name="search" />
        <S.SearchInput aria-label="Busca de produtos" placeholder="Busca" type="search" />
      </S.SearchInputWrapper>
    </S.SearchContainer>
  );
};

export default Search;

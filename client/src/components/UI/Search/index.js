import { func, string } from 'prop-types';
import React from 'react';
import * as S from './styles';

const Search = ({ value, setValue }) => {
  return (
    <S.SearchContainer data-testid="MN_SEARCH">
      <S.SearchInputWrapper>
        <box-icon data-icon="box-icon" name="search" />
        <S.SearchInput
          aria-label="Busca de produtos"
          placeholder="Busca"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </S.SearchInputWrapper>
    </S.SearchContainer>
  );
};

Search.propTypes = {
  setValue: func,
  value: string,
};

export default Search;

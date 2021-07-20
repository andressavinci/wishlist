import styled from 'styled-components/macro';

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  background-color: transparent;
  position: relative;
  width: 100%;

  > [data-icon='box-icon'] {
    fill: ${({ theme }) => theme.colors.black};
    left: 16px;
    position: absolute;
    top: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
    text-overflow: ellipsis;
  }
`;

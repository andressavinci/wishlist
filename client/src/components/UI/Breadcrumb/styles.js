import styled from 'styled-components/macro';

export const BreadcrumbWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
`;

export const BreadcrumbList = styled.ol`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  & a {
    color: ${({ theme }) => theme.colors.black};
  }

  & > li:last-child::after {
    display: none;
  }
`;

export const BreadcrumbItem = styled.li`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  list-style: none;

  &::after {
    content: '>';
    display: inline-block;
    padding: 0 0.4rem;
  }
`;

export const BreadcrumbLink = styled.a`
  cursor: pointer;
  display: inline-block;
`;

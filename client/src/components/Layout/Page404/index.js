import React from 'react';
import { Header } from 'components/Layout';
import { Container } from 'components/UI';

const Page404 = () => {
  return (
    <>
      <Header />
      <Container as="main">
        <h1>Página não encontrada :(</h1>
      </Container>
    </>
  );
};

export default Page404;

import React from 'react';
import { object } from 'prop-types';
import { Header } from 'components/Layout';
import { Container } from 'components/UI';

const PageWishlist = ({ match }) => {
  const {
    params: { productId },
  } = match;

  return (
    <>
      <Header />
      <Container as="main">
        <h1>Lista de desejos</h1>
        <h2>{productId}</h2>
      </Container>
    </>
  );
};

PageWishlist.propTypes = {
  match: object,
  location: object,
};

export default PageWishlist;

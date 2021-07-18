import React from 'react';
import { object } from 'prop-types';
import { Header } from 'components/Layout';

const PageWishlist = ({ match }) => {
  const {
    params: { productId },
  } = match;

  return (
    <>
      <Header />
      <main>
        <h1>PageWishlist</h1>
        <h2>ProductId: {productId}</h2>
      </main>
    </>
  );
};

PageWishlist.propTypes = {
  match: object,
  location: object,
};

export default PageWishlist;

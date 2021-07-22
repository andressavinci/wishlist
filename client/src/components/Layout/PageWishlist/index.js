import React from 'react';
import { object } from 'prop-types';
import { Header } from 'components/Layout';
import { Card, Container } from 'components/UI';
import * as S from './styles';
import { useLocalStorage } from 'hooks';

const PageWishlist = () => {
  const isProductAmongWishlist = (arr, id) => arr.some((el) => el.id === id);
  const [storedWishlistProducts, setStoredWishlistProducts] = useLocalStorage(
    'mn_wishlist_products',
    []
  );

  const toggleWishlistProducts = (product) =>
    setStoredWishlistProducts((prevState) => {
      const isWishlistProduct = isProductAmongWishlist(prevState, product.id);
      const addProduct = prevState.concat(product);
      const removeProduct = prevState.filter((el) => el.id !== product.id);

      return isWishlistProduct ? removeProduct : addProduct;
    });

  const breadcrumbItems = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Lista de desejos',
    },
  ];

  return (
    <>
      <Header breadcrumbItems={breadcrumbItems} />
      <Container as="main">
        <S.WishlistCardsWrapper>
          {storedWishlistProducts.length ? (
            Object.values(storedWishlistProducts).map((obj, index) => (
              <Card
                id={obj.id}
                image={obj.image}
                isInWishlist={isProductAmongWishlist(storedWishlistProducts, obj.id)}
                key={index}
                price={obj.price}
                title={obj.title}
                handleAddToWishlistClick={(event) => {
                  event.preventDefault();
                  toggleWishlistProducts(obj);
                }}
              />
            ))
          ) : (
            <div>Sua lista está vazia :(</div>
          )}
        </S.WishlistCardsWrapper>
      </Container>
    </>
  );
};

PageWishlist.propTypes = {
  match: object,
  location: object,
};

export default PageWishlist;

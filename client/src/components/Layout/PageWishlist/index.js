import React, { useContext, useEffect, useState } from 'react';
import { Header } from 'components/Layout';
import { Card, Container } from 'components/UI';
import * as S from './styles';
import { useDebounce, useLocalStorage } from 'hooks';
import { SearchContext } from 'contexts';

const PageWishlist = () => {
  const [productsArray, setProductsArray] = useState();

  const { search } = useContext(SearchContext);
  const debouncedSearch = useDebounce(search, 500);
  const isSearchFieldEmpty = !search || search === '';

  const isProductAmongWishlist = (arr, id) => arr.some((el) => el.id === id);
  const [storedWishlistProducts, setStoredWishlistProducts] = useLocalStorage(
    'mn_wishlist_products',
    []
  );

  useEffect(() => {
    if (isSearchFieldEmpty) {
      setProductsArray(storedWishlistProducts);
      return;
    }
    setProductsArray(() =>
      storedWishlistProducts?.filter((el) => el.title === debouncedSearch)
    );
  }, [debouncedSearch, storedWishlistProducts]);

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
          {productsArray?.length ? (
            Object.values(productsArray).map((obj, index) => (
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

export default PageWishlist;

import React, { useContext, useEffect, useState } from 'react';
import { Header } from 'components/Layout';
import { Card, Container } from 'components/UI';
import * as S from './styles';
import { useDebounce, useLocalStorage } from 'hooks';
import { SearchContext } from 'contexts';
import { getProducts } from 'services';

const PageHome = () => {
  const [products, setProducts] = useState();
  const [productsArray, setproductsArray] = useState();

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
      setproductsArray(products);
      return;
    }
    setproductsArray(() => products?.filter((el) => el.title === debouncedSearch));
  }, [debouncedSearch, products]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.express.products))
      .catch((err) => console.log(err));
  }, []);

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
    },
  ];

  return (
    <>
      <Header breadcrumbItems={breadcrumbItems} />
      <Container as="main">
        <S.HomeCardsList data-testid="MN_PRODUCTS_LIST">
          {productsArray &&
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
            ))}
          {productsArray?.length === 0 && <div>Não encontramos produtos :(</div>}
        </S.HomeCardsList>
      </Container>
    </>
  );
};

export default PageHome;

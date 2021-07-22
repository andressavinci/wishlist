import React, { useEffect, useState } from 'react';
import { Header } from 'components/Layout';
import { Card, Container } from 'components/UI';
import * as S from './styles';
import { useLocalStorage } from 'hooks';

const PageHome = () => {
  const [response, setResponse] = useState();
  const isProductAmongWishlist = (arr, id) => arr.some((el) => el.id === id);
  const [storedWishlistProducts, setStoredWishlistProducts] = useLocalStorage(
    'mn_wishlist_products',
    []
  );

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/products');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
        <S.HomeCardsWrapper>
          {response &&
            Object.values(response.products).map((obj, index) => (
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
        </S.HomeCardsWrapper>
      </Container>
    </>
  );
};

export default PageHome;

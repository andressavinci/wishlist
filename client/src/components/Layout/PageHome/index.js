import React, { useEffect, useState } from 'react';
import { Header } from 'components/Layout';
import { Card, Container } from 'components/UI';
import * as S from './styles';

const PageHome = () => {
  const [response, setResponse] = useState();

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
                key={index}
                price={obj.price}
                title={obj.title}
              />
            ))}
        </S.HomeCardsWrapper>
      </Container>
    </>
  );
};

export default PageHome;

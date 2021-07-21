import React, { useEffect, useState } from 'react';
import { Header } from 'components/Layout';
import { Container } from 'components/UI';

const PageHome = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/hello');
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
        <h2>Lista de Produtos</h2>
        <div>{response}</div>
      </Container>
    </>
  );
};

export default PageHome;

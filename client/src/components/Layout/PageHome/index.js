import React, { useEffect, useState } from 'react';
import { Header } from 'components/Layout';

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

  return (
    <>
      <Header />
      <main>
        <h2>HOME</h2>
        <div>{response}</div>
      </main>
    </>
  );
};

export default PageHome;

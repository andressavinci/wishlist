import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import * as S from './styles';

const App = () => {
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
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>Response: {response}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <S.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.Wrapper>
  );
};

export { App };

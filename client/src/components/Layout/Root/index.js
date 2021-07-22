import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchContextProvider } from 'contexts';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={main}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </ThemeProvider>
    </Router>
  );
};

Root.propTypes = {
  children: node,
};

Root.defaultProps = {
  children: <div />,
};

export default Root;

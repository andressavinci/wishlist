import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={main}>{children}</ThemeProvider>
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

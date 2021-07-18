import React from 'react';
import { node } from 'prop-types';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Root } from 'components/Layout';

const WrapperProvider = ({ children }) => <Root>{children}</Root>;
WrapperProvider.propTypes = { children: node };

const customRender = (ui, options) =>
  render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };

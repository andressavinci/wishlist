import React from 'react';
import { render, screen } from 'setupTests';
import { App } from 'components/Layout/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

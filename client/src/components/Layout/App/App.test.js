import React from 'react';
import { render } from 'setupTests';
import { App } from 'components/Layout';

describe('<App />', () => {
  test('should render App', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('MN_APP');
    expect(element).toBeInTheDocument();
  });
});

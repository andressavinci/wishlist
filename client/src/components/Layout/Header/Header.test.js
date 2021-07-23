import React from 'react';
import { render } from 'setupTests';
import { Header } from 'components/Layout';

describe('<Header />', () => {
  it('should render Header', () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId('MN_HEADER');
    expect(element).toBeInTheDocument();
  });
});

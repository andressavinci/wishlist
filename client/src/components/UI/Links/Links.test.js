import React from 'react';
import { render } from 'setupTests';
import { Links } from 'components/UI';

describe('<Links />', () => {
  it('should render Links', () => {
    const { getByTestId } = render(<Links />);
    const element = getByTestId('MN_LINKS');
    expect(element).toBeInTheDocument();
  });
});

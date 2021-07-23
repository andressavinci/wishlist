import React from 'react';
import { render } from 'setupTests';
import { Logo } from 'components/UI';

describe('<Logo />', () => {
  it('should render Logo', () => {
    const { getByTestId } = render(<Logo />);
    const element = getByTestId('MN_LOGO');
    expect(element).toBeInTheDocument();
  });
});

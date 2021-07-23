import React from 'react';
import { render } from 'setupTests';
import { Search } from 'components/UI';

describe('<Search />', () => {
  it('should render Search', () => {
    const { getByTestId } = render(<Search />);
    const element = getByTestId('MN_SEARCH');
    expect(element).toBeInTheDocument();
  });
});

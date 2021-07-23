import React from 'react';
import { render } from 'setupTests';
import { Card } from 'components/UI';

const cardInWishlistProps = {
  id: 0,
  image: 'https://via.placeholder.com/300x300',
  price: 229.9,
  title: 'Camisa Nike Corinthians I',
  handleAddToWishlistClick: () => null,
  isInWishlist: true,
};

const cardNotInWishlistProps = {
  id: 0,
  image: 'https://via.placeholder.com/300x300',
  price: 229.9,
  title: 'Camisa Nike Corinthians I',
  handleAddToWishlistClick: () => null,
  isInWishlist: false,
};

describe('<Card />', () => {
  it('should render Card properly', () => {
    const { getByTestId } = render(<Card {...cardInWishlistProps} />);
    const card = getByTestId(/MN_CARD/);
    expect(card).toBeInTheDocument();
  });

  it('should render heart icon type solid', () => {
    const { getByTestId } = render(<Card {...cardInWishlistProps} />);
    const icon = getByTestId('MN_ICON_ADD_TO_WISHLIST');
    expect(icon).toHaveAttribute('type', 'solid');
  });

  it('should render heart icon type regular', () => {
    const { getByTestId } = render(<Card {...cardNotInWishlistProps} />);
    const icon = getByTestId('MN_ICON_ADD_TO_WISHLIST');
    expect(icon).toHaveAttribute('type', 'regular');
  });
});

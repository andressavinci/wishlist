import React from 'react';
import { bool, func, number, string } from 'prop-types';
import * as S from './styles';

const Card = ({ id, image, price, title, handleAddToWishlistClick, isInWishlist }) => {
  return (
    <S.CardWrapper data-testid={`MN_CARD_${id}`}>
      <S.CardAddToWishlist onClick={handleAddToWishlistClick}>
        <box-icon
          data-icon="box-icon"
          name="heart"
          type={isInWishlist ? 'solid' : 'regular'}
        ></box-icon>
      </S.CardAddToWishlist>
      <S.CardImage src={image} alt="" />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardPrice>
        {`R$ ${Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(price)}`}
      </S.CardPrice>
    </S.CardWrapper>
  );
};

Card.propTypes = {
  handleAddToWishlistClick: func,
  id: number,
  image: string,
  isInWishlist: bool,
  price: number,
  title: string,
};

export default Card;

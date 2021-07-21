import React from 'react';
import { number, string } from 'prop-types';
import * as S from './styles';

const Card = ({ id, image, price, title }) => {
  return (
    <S.CardWrapper data-testid={`MN_CARD_${id}`}>
      <S.CardImage src={image} alt="" />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardPrice>
        {`R$ ${Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(price)}`}
      </S.CardPrice>
    </S.CardWrapper>
  );
};

Card.propTypes = {
  id: number,
  image: string,
  price: number,
  title: string,
};

export default Card;

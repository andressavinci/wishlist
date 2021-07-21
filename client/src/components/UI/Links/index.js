import React from 'react';
import * as S from './styles';

const Links = () => {
  return (
    <S.LinksWrapper data-testid="MN_LINKS">
      <li>
        <box-icon data-icon="box-icon" name="map" type="solid" />
        Cidade: São Paulo
      </li>
      <li>
        <box-icon data-icon="box-icon" name="phone" type="solid" />
        Central de Atendimento
      </li>
      <li>
        <box-icon data-icon="box-icon" name="heart" type="solid" />
        Lista de desejos
      </li>
    </S.LinksWrapper>
  );
};

export default Links;

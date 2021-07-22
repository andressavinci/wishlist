import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { links } from './links';

const Links = () => {
  return (
    <S.LinksWrapper data-testid="MN_LINKS">
      {Object.values(links).map((obj, index) => (
        <S.LinksItem key={index}>
          <Link to={obj.url} title={obj.text}>
            <box-icon data-icon="box-icon" name={obj.icon} type="solid" />
            {obj.text}
          </Link>
        </S.LinksItem>
      ))}
    </S.LinksWrapper>
  );
};

export default Links;

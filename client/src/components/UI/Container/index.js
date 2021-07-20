import React from 'react';
import { oneOf, node } from 'prop-types';
import * as S from './styles';

const Container = (props) => <S.Container {...props} />;

Container.propTypes = {
  direction: oneOf(['column', 'row']),
  as: oneOf(['div', 'main', 'section']),
  children: node,
};

Container.defaultProps = {
  as: 'section',
  direction: 'column',
};

export default Container;

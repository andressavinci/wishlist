import { array } from 'prop-types';
import React from 'react';
import * as S from './styles';

const hasURL = (item) => !!item.url;
const isArrayLastItem = (index, arr) => index === arr.length - 1;
const getArrayNumberOfItems = (arr) => arr?.length;
const hasArrayMultipleItems = (arr) => getArrayNumberOfItems(arr) > 1;

const renderItem = (item, index) => (
  <S.BreadcrumbItem key={index} data-testid={`MN_BREADCRUMB_ITEM-${index}`}>
    <span tabIndex="0" aria-label={item.text}>
      {item.text}
    </span>
  </S.BreadcrumbItem>
);

const renderItemWithLink = (item, index) => (
  <S.BreadcrumbItem key={index} data-testid={`MN_BREADCRUMB_ITEM-${index}`}>
    <S.BreadcrumbLink href={item.url} title={item.text} aria-label={item.text}>
      {item.text}
    </S.BreadcrumbLink>
  </S.BreadcrumbItem>
);

const Breadcrumb = ({ items }) => {
  let listItems = [];

  if (hasArrayMultipleItems(items)) {
    listItems = items.map((item, index, arr) => {
      if (isArrayLastItem(index, arr)) {
        return renderItem(item, index);
      } else {
        return hasURL(item) ? renderItemWithLink(item, index) : renderItem(item, index);
      }
    });
  } else {
    listItems = renderItem(items[0], 0);
  }

  return (
    <S.BreadcrumbWrapper data-testid="MN_BREADCRUMB">
      <S.BreadcrumbList
        aria-label="Você está em:"
        className={'is-mobile'}
        data-testid="MN_BREADCRUMB_LIST"
        tabIndex="0"
      >
        {listItems}
      </S.BreadcrumbList>
    </S.BreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  items: array.isRequired,
};

export default Breadcrumb;

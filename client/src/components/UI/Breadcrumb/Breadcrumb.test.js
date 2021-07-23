import React from 'react';
import { render } from 'setupTests';
import Breadcrumb from 'components/UI/Breadcrumb';

const singleItem = [
  {
    text: 'Home',
  },
];

const multipleItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Lista de desejos',
  },
];

describe('<Breadcrumb />', () => {
  describe('Single item', () => {
    const props = {
      items: singleItem,
    };

    it('should render properly', () => {
      const { getByTestId } = render(<Breadcrumb {...props} />);
      const element = getByTestId('MN_BREADCRUMB');
      expect(element).toBeInTheDocument();
      expect(element).not.toBeEmptyDOMElement();
      expect(element).toBeInstanceOf(HTMLElement);
    });
    it('should render one single item', () => {
      const { getByTestId } = render(<Breadcrumb {...props} />);
      const element = getByTestId('MN_BREADCRUMB_LIST');
      const elementNumberOfChildren = parseInt(element.children.length);
      expect(elementNumberOfChildren).toBe(1);
    });
  });
  describe('Multiple Items', () => {
    const props = {
      items: multipleItems,
    };

    it('should render properly', () => {
      const { getByTestId } = render(<Breadcrumb {...props} />);
      const element = getByTestId('MN_BREADCRUMB');
      expect(element).toBeInTheDocument();
      expect(element).not.toBeEmptyDOMElement();
      expect(element).toBeInstanceOf(HTMLElement);
    });
    it('should render all items', () => {
      const { getByTestId } = render(<Breadcrumb {...props} />);
      const element = getByTestId('MN_BREADCRUMB_LIST');
      const elementNumberOfChildren = parseInt(element.children.length);
      expect(elementNumberOfChildren).toBe(multipleItems.length);
    });
  });
});

/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Escolhe um produto dentre os itens da lista atual para adicionar à lista de desejos', () => {
  before(() => {
    cy.visit('/');
    cy.clearProductsLocalStorage();
  });

  it('Confere a existência da lista', () => {
    cy.get('[data-testid="MN_PRODUCTS_LIST"]').wait(2000).should('be.visible');
  });

  it('Adicionar um produto à lista de desejos', () => {
    const jQuery = Cypress.$;

    cy.getProductsFromList((items) => {
      const productsList = [];
      jQuery(items).each(function () {
        productsList.push(jQuery(this).data('productid'));
      });

      const selectedProduct = productsList[Math.floor(Math.random() * items.length)];
      return selectedProduct;
    }).then((selectedProduct) => {
      cy.get(`[data-productid=${selectedProduct}]`)
        .find('button')
        .click()
        .should(() => {
          expect(JSON.parse(localStorage.getItem('mn_wishlist_products'))[0].id).to.eq(
            selectedProduct
          );
        });
    });
  });
});

/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Executa busca pelo nome exato do produto', () => {
  before(() => {
    cy.visit('/').wait(2000);
  });

  const product = 'Camisa Nike Corinthians I';

  it('Confere a existência do campo de busca', () => {
    cy.get('[data-testid="MN_SEARCH"]').should('be.visible');
  });

  it('Digita no campo de busca e confere o valor digitado', () => {
    cy.get('[data-testid="MN_SEARCH"] input[type="search"]')
      .click()
      .type(product)
      .wait(3000);
  });

  it('Procura por ocorrências do produto na lista', () => {
    const jQuery = Cypress.$;

    cy.getProductsFromList((items) => {
      const productsList = [];
      jQuery(items).each(function () {
        productsList.push(jQuery(this).find('> h2').text());
      });
      const isProductOnTheList = productsList.includes(product);
      return isProductOnTheList;
    }).then((isProductOnTheList) => {
      expect(isProductOnTheList).to.eq(true);
    });
  });
});

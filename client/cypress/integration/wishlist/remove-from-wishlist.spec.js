/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Remove um produto da lista de desejos', () => {
  before(() => {
    cy.visit('/wishlist');
    cy.clearProductsLocalStorage();
  });

  const products = [
    {
      id: 0,
      sku: 8552515751438644,
      title: 'Camisa Nike Corinthians I',
      description: '14/15 s/nº',
      availableSizes: {
        S: 100,
        G: 5,
        GG: 120,
        GGG: 12,
      },
      style: 'Branco com listras pretas',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      image: 'https://via.placeholder.com/300x300',
    },
  ];

  it('Confere a existência da lista', () => {
    cy.get('[data-testid="MN_WISHLIST_LIST"]').should('be.visible');
  });

  it('Remover um produto da wishlist', () => {
    cy.populateLocalStorage(products).reload();

    cy.get(`[data-productid=0]`).find('button').click().wait(2000).should('not.exist');
  });
});

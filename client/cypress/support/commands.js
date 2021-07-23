// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* eslint-disable no-undef */
/// <reference types="cypress" />

Cypress.Commands.add('getProductsFromList', (callback) => {
  const list = cy.get('[data-testid="MN_PRODUCTS_LIST"]');
  const products = list.find('li');
  products.then((items) => callback(items));
});

Cypress.Commands.add('clearProductsLocalStorage', () => {
  window.localStorage.removeItem('mn_wishlist_products');
});

Cypress.Commands.add('populateLocalStorage', (arr) => {
  window.localStorage.setItem('mn_wishlist_products', JSON.stringify(arr));
});

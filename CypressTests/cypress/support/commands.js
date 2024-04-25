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


Cypress.Commands.add('loginToApplication', ()=> {
    cy.visit('/');
    cy.get('form[name="loginCtrl.loginForm"] [placeholder="Prihlasovacie meno"]', { timeout: 10000 }).type('cypress_bca');
    cy.get('form[name="loginCtrl.loginForm"] [placeholder="Heslo"]', { timeout: 10000 }).type('NovaPr4478');
    cy.contains('Prihlásiť ').click();
});

Cypress.Commands.add('getNextOfferName', () => {
    const currentOfferNumber = Cypress.env('offerNumber') || 0;
    const nextOfferNumber = currentOfferNumber + 1;
    Cypress.env('offerNumber', nextOfferNumber);
    return `Test ponuka_${nextOfferNumber}`;
  });


  Cypress.Commands.add('getNextCode', () => {
    const currentCodeNumber = Cypress.env('codeNumber') || 0;
    const nextCodeNumber = currentCodeNumber + 1;
    Cypress.env('codeNumber', nextCodeNumber);
    return `00${nextCodeNumber}`.slice(-3);
  });
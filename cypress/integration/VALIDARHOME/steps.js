import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^que eu acesso o site$/, () => {
  cy.visit('/home/index')
});

 Then(/^valido a tela home$/, () => {
  cy.contains('Site para Automação').should('be.visible')
});

 Then(/^valida a url$/, () => {
  cy.url().should('include', '/home/index')
});


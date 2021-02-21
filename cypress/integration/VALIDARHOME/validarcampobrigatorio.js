import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^que eu acesso o site$/, () => {
    cy.visit('/home/index')
});

 When(/^clico em começar automação$/, () => {
    cy.get('.col > #index-banner > .container > .row > .btn').click()
});

Then(/^devo clicar em formulario$/, () => {
    cy.get('.row > .col > .collapsible > .bold:nth-child(1) > .collapsible-header').click()
});

When(/^clico em criar usuario$/, () => {
    cy.get('.active > .collapsible-body > ul > li:nth-child(1) > a').click()
});

Then(/^falha ao preencher o formulario$/, () => {

    cy.get('#new_user > .row > .col > .actions > input').click() // Clico em salvar

});

Then(/^valido campo obrigatorio/, () => {
    cy.contains('3 errors proibiu que este usuário fosse salvo:').should('be.visible')
});

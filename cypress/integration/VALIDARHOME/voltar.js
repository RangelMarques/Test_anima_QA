import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

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

Then(/^preencho o formulario$/, () => {
    cy.get('#new_user > .row > .col > .input-field > #user_name').type('Alvaro Rangel')
    cy.get('#new_user > .row > .col > .input-field > #user_lastname').type('Oliveira')
    cy.get('#new_user > .row > .col > .input-field > #user_email').type('rangeelmarques@gmail.com')
    cy.get('#new_user > .row > .col > .input-field > #user_address').type('Rua honorato pereira lopes')
    cy.get('#new_user > .row > .col > .input-field > #user_university').type('Estacio de SA')
    cy.get('#new_user > .row > .col > .input-field > #user_profile').type('Analista de TEstes')
    cy.get('#new_user > .row > .col > .input-field > #user_gender').type('Masculino')
    cy.get('#new_user > .row > .col > .input-field > #user_age').type('28')

    cy.get('#new_user > .row > .col > .actions > input').click() // Clico em salvar

});

Then(/^valida a mensagem de sucesso/, () => {
    cy.get('#notice').should('be.visible')                      // Verifica se o elemento está visível na página.
});

Then(/^voltar pagina/, () => {
    cy.get('.row > .col > .row > .col > .red').click()
});
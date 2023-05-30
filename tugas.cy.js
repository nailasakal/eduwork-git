///<reference types="cypress" />

describe('My First Test', () => {
    it('clicking"type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click();

        // should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        //Get an input, type intoit and verify that the value has been updated
        cy.get('.action-email')
            .type('example@mail.com')
            .should('have.value', 'example@mail.com');

    })
})
/////<reference types="cypress" />

describe('Working with inputs', () => {
    it("Should check the 'Keep me signed in'", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.url().should("include", "login.html");
        cy.get("#user_remember_me").check();
    });
});



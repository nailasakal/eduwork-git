/////<reference types="cypress" />

describe("Login & Logout", () => {
  it("Should Fail Login", () => {
    cy.fixture("auth").then((auth) => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type(auth.username_locked_out);
      cy.get("#password").type(auth.password);
      cy.get("#login-button").click();
      cy.get("h3").should(
        "contain.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
    });
  });

  it("Should Success Login", () => {
    cy.fixture("auth").then((auth) => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type(auth.username_standart);
      cy.get("#password").type(auth.password);
      cy.get("#login-button").click();
      cy.get(".title").contains("Products");
    });
  });

  it("Should Success Logout", () => {
    cy.fixture("auth").then((auth) => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type(auth.username_standart);
      cy.get("#password").type(auth.password);
      cy.get("#login-button").click();
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();
      cy.get("#login-button").should("contain.value", "Login");
    });
  });
});

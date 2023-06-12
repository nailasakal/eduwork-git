////<reference types="cypress" />

describe("Swag labs test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should login to application with valid data", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.username2, user.password2);
    });
  });

  it.only("successful purchase", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.username2, user.password2);
    });
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("lisa");
    cy.get("#last-name").type("bp");
    cy.get("#postal-code").type("223344");
    cy.get("#continue").click();
    cy.get("#finish").click();
  });

  it("must exit the page when click logout", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.username2, user.password2);
    });
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.url().should("include", "https://www.saucedemo.com");
    cy.get("#login-button").should("be.visible");
  });
});

Cypress.Commands.add("login", (username2, password2) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type(username2);
  cy.get("#password").type(password2);
  cy.get("#login-button").click();
});

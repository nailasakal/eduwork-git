////<reference types="cypress" />

describe("Login & Logout Test", () => {
  it("should try to login with invalid data then display error message", () => {
    cy.login("invalid username", "invalid password");
    cy.get(".alert-error")
      .should("be.visible")
      .and("contain.text", "Login and/or password are wrong.");
  });

  it("should login to application with valid data", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.username, user.password);
    });
  });

  it("should logout from the application", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.username, user.password);
    });
    cy.contains("username").click();
    cy.get("#logout_link").click();
    cy.get("strong").should("contain.text", "Home");
    cy.get("strong").should("contain.text", "Online Banking");
  });
});

Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://zero.webappsecurity.com/login.html");
  cy.url().should("include", "login");
  cy.get("#login_form").should("be.visible");
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);
  cy.get("#user_password").clear();
  cy.get("#user_password").type(password);
  cy.get("input[name='submit']").click();
});

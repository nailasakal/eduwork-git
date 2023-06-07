////<reference types="cypress" />

describe("Payment", () => {
  it("Should Success Pay Bill", () => {
    cy.login("username", "password");
    cy.paybill("2000", "2023-06-05", "learn");
  });
});


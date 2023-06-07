////<reference types="cypress" />

describe("Searchbox Online", () => {
  it("should type into searchbox and submit", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.get("#searchTerm").type("online {enter}");
    cy.get("a").should("contain.text", "Zero - Free Access to Online Banking");
    cy.get("a").should("contain.text", "Zero - Online Statements");
  });
});

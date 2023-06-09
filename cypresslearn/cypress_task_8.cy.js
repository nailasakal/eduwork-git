////<reference types="cypress" />

describe("homepage test", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });

  it("should display online banking containt", () => {
    cy.contains("Online Banking").click();
    cy.url().should("include", "online-banking.html");
    cy.get("h1").should("be.visible");
    cy.get("#account_summary_link").click();
  });
  it("should display feedback contain", () => {
    cy.contains("Feedback").click();
    cy.url().should("include", "feedback.html");
    cy.get("#feedback-title").should("be.visible");
    cy.get(".icon-signin").click();
    cy.get(".page-header").should("contain.text", "Log in to ZeroBank");
  });

  it('should display homepage content', () => {
    cy.contains("Zero Bank").click();
    cy.url().should("include", "index.html");
  });
});


Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://zero.webappsecurity.com/login.html");
  cy.get("#user_login").type(username);
  cy.get("#user_password").type(password);
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("paybill", (amount, date, description) => {
  cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
  cy.get("#sp_amount").type(amount);
  cy.get("#sp_description").type(description);
  cy.get("#sp_date").type(date);
  cy.get("#pay_saved_payees").click();
});

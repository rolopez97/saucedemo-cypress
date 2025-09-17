
Cypress.Commands.add('typeLogin', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
})

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
})


import homePage from "../pages/homepage";
import inventoryPage from "../pages/inventoryPage.js";

Cypress.Commands.add('loginOk', (username, password) => {
    cy.get("[data-test='username']").type(username);
    cy.get("[data-test='password']").type(password);
    cy.get("[data-test='login-button']").click();
})

Cypress.Commands.add('loginOkPOM', (username, password) => {
    homePage.typeUsername(username)
    homePage.typePassword(password)
    homePage.clickLoginButton()
    inventoryPage.abrirMenu()
    inventoryPage.logout()
})

Cypress.Commands.add('loginOk2', () => {
    cy.get("[data-test='username']").type('standard_user');
    cy.get("[data-test='password']").type('secret_sauce');
    cy.get("[data-test='login-button']").click();
})
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('[data-test="logout-sidebar-link"]').click();  
})

  Cypress.Commands.add('assertion_text', (selector, text) => { 
   cy.get(selector).should('have.text',text)
})
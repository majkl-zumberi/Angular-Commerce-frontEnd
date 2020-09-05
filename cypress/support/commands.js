// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Login',()=>{
  sessionStorage.removeItem('utente');
  localStorage.removeItem('token');
  cy.visit("");
  cy.url().should('eq', 'http://localhost:4200/auth/login')
    cy.get('form').within($form => {
      cy.wrap($form).find('input[type="email"]').first()
        .type('majklzumberi00@gmail.com')
        .should('have.value', 'majklzumberi00@gmail.com')
        .and('have.focus');

      cy.wrap($form).find('input[type="password"]').first()
        .type('test123')
        .should('have.value', 'test123')
        .and('have.focus');


    })
    cy.request('POST', 'http://localhost:3000/users/signIn', { email: 'majklzumberi00@gmail.com',password:"test123" })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('token') // true
      cy.get('button').last().click();
      cy.url().should('eq', 'http://localhost:4200/home/clothes');
    })


})

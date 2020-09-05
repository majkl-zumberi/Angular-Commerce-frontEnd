context('sign up', () => {
  before(() => {
    sessionStorage.removeItem("utente");
    localStorage.removeItem("token");
    cy.visit('http://localhost:4200/auth/sign-up');
  });

  it('checks nav bar content', () => {
    cy.get('h1').first().should('have.text','lillo.it');
    cy.get('button')
      .first()
      .should('have.text','Accedi')
      .and('be.visible')
      .and('have.attr','routerlink','/auth/login');
  });
  it('checks form content', () => {
    cy.get('form').within($form => {
      cy.wrap($form).should('be.visible')
      cy.wrap($form).find('button').last().should('be.disabled').and('have.text','Registrati');

      cy.wrap($form).find('input[type="email"]').first()
        .type('majklzumberi00@gmail.com')
        .should('have.value', 'majklzumberi00@gmail.com')
        .and('have.attr','placeholder','inserisci email')
        .and('have.focus');

      cy.wrap($form).find('input[type="password"]').first()
        .type('test123')
        .should('have.value', 'test123')
        .and('have.attr','placeholder','inserisci password')
        .and('have.focus');

        cy.wrap($form).find('input[type="password"]').last()
        .type('test123')
        .should('have.value', 'test123')
        .and('have.attr','placeholder','conferma password')
        .and('have.focus');
        cy.wrap($form).find('button').last().should('not.be.disabled');
    })
  });
  it('checks for password alert [non coincidono] ', () => {
    cy.get('input[type="password"]').last().clear();
    cy.get('form').within($form =>{
      cy.wrap($form).children().should('have.length',5)
      cy.get('input[type="password"]').last().type("test123");
      cy.wrap($form).children().should('have.length',4)
    })
  });
  it('[fail] sign-up with existing user', () => {
    cy.get('form').within($form => {
      cy.wrap($form).should('be.visible')
      cy.wrap($form).children().should('have.length', 4);
        cy.wrap($form).find('button').last().should('not.be.disabled');
        cy.wrap($form).find('button').last().click();
        cy.wrap($form).children().should('have.length', 5);
        cy.get("div[role='alert']").within($invalidLoginAlert =>{
          cy.wrap($invalidLoginAlert).should('be.visible')
          cy.wrap($invalidLoginAlert).find('strong').first().should('have.text','Errore')
          cy.wrap($invalidLoginAlert).find('span').first().should('have.text','email già in uso')
        });
    })
  });
});

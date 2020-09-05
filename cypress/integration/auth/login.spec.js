context('login',  () => {
  before(() => {
    sessionStorage.removeItem('utente');
    localStorage.removeItem('token');
    cy.visit('');
    cy.url().should('eq', 'http://localhost:4200/auth/login');
  })
  it('checks nav bar content', () => {
    cy.get('h1').first().should('have.text','lillo.it');
    cy.get('button')
      .first()
      .should('have.text','Registrati')
      .and('be.visible')
      .and('have.attr','routerlink','/auth/sign-up');
  });
  it('checks form content', () => {
    cy.get('form').within($form => {
      cy.wrap($form).should('be.visible')
      cy.wrap($form).find('button').last().should('be.disabled').and('have.text','Login');

      cy.wrap($form).find('input[type="email"]').first()
        .type('majklzumberi00@gmail.com')
        .should('have.value', 'majklzumberi00@gmail.com')
        .and('have.focus');

      cy.wrap($form).find('input[type="password"]').first()
        .type('test123')
        .should('have.value', 'test123')
        .and('have.focus');
    })
  });

  it('fail login using dummy credentials', () => {
    cy.get('form').within($form => {
      cy.wrap($form).find('input[type="email"]').first().clear()
      cy.wrap($form).find('input[type="password"]').first().clear()
      cy.wrap($form).should('be.visible')
      cy.wrap($form).find('button').last().should('be.disabled').and('have.text','Login').as('loginBtn');
      cy.wrap($form).children().should('have.length', 4);
      cy.wrap($form).find('input[type="email"]').first()
        .type('fake@user.com')
        .should('have.value', 'fake@user.com')
        .and('have.focus');

      cy.wrap($form).find('input[type="password"]').first()
        .type('123')
        .should('have.value', '123')
        .and('have.focus');
      cy.get('@loginBtn').click();
      cy.wrap($form).children().should('have.length', 5);
      cy.get("div[role='alert']").within($invalidLoginAlert =>{
        cy.wrap($invalidLoginAlert).should('be.visible')
        cy.wrap($invalidLoginAlert).find('strong').first().should('have.text','Errore')
        cy.wrap($invalidLoginAlert).find('span').first().should('have.text','email non trovata')
      });
    })
  });

  it('clicks to signUp btn', () => {
    cy.get('button').first().should('have.text','Registrati').click();
    cy.url().should('eq', 'http://localhost:4200/auth/sign-up');
    cy.visit('');
  });

  it('successfully login', () => {
    cy.Login();
  });
})

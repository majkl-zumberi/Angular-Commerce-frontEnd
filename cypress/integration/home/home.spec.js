context('home', () => {
  before(() => {
    cy.Login();
    cy.url().should('eq','http://localhost:4200/home/clothes')
  });

  it('checks for menu content [navbar]', () => {
    cy.get('nav').within($navBar =>{
      cy.wrap($navBar).should('be.visible')
      cy.wrap($navBar).children().should('have.length',3)
      cy.wrap($navBar).children().eq(1).should('have.text','Welcome to Lillo.it')
    });
    cy.get('app-menu-link').first().find('a').should('have.text','Home').and('have.attr','href','/home/clothes')
    cy.get('app-menu-link').last().find('a').should('have.text','Carrello (0)').and('have.attr','href','/cart')
  });

  it('check dresses', () => {
    cy.get('.flex-wrap').children().should('have.length',7)
    cy.get(':nth-child(2) > .text-2xl').should('have.text','Not today')
    cy.get(':nth-child(2) > .flex > .w-full').should('have.text','personalizza ora').click()
    cy.url().should('include', '/home/detail')
  });
});

context('', () => {
  before(() => {
    cy.Login()
    cy.get('.flex-wrap').children().should('have.length',7)
    cy.get(':nth-child(2) > .text-2xl').should('have.text','Not today')
    cy.get(':nth-child(2) > .flex > .w-full').should('have.text','personalizza ora').click()
    cy.url().should('include', '/home/detail')
  });

  it('check menu title', () => {
    cy.contains('Personalizza il tuo prodotto')
  });
  it('check content form', () => {
    cy.contains('Prodotto')
    cy.contains('Colore prodotto')
    cy.contains('Testo personalizzato')
    cy.get('form').within($form =>{
      cy.wrap($form).find('button').last().should('be.disabled').and('have.text','aggiungi al carrello')
    })
  });

});

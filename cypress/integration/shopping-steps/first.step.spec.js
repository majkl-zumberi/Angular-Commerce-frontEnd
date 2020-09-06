context('first step', () => {
  before(() => {
    cy.Login()
    cy.get('.flex-wrap').children().should('have.length',7)
    cy.get(':nth-child(2) > .text-2xl').should('have.text','Not today')
    cy.get(':nth-child(2) > .flex > .w-full').should('have.text','personalizza ora').click()
    cy.url().should('include', '/home/detail')
  });
  it('add to cart a product', () => {
    cy.get('div.modal').should('not.be.visible');
    cy.get('#productColor > div').find('span').eq(2).click();// clicco quello giallo
    cy.get('#dressType > div > :nth-child(2)').click();
    cy.get('#customText').clear();
    cy.get('#customText').type('test da cypress')
    cy.get('#customTextColor > div').find('span').first().click();
    cy.get('form').find('button').last().click()
    cy.get('div.modal').should('have.css','opacity', '1');
    cy.get('div.modal').should('have.css','visibility', 'visible');
    cy.get('.relative > #text-card > .flex > span').should('have.text','Carrello (1)');
  });
  it('navigate to first step', () => {

  });
});

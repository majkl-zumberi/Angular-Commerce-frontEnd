context('steps', () => {
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
    cy.get('.mt-3 > .inline-flex').should('have.text',' vai al check-out ').click()
    cy.url().should('eq','http://localhost:4200/cart/first-step');
  });
  it('check navbar content', () => {
    cy.get('nav').find('div').eq(1).find('h1').first().should('have.text','Carrello (1)');
    cy.get('nav > div > app-menu-link > a').should('have.text','Home').and('have.attr','href','/home/clothes');
  });
  it('remove article from the cart', () => {
    cy.get('app-modal').should('not.be.visible');
    cy.get('button').first().should('have.text','rimuovi').click();
  });

  it('check modal content', () => {
    cy.get('app-modal').within($modal=>{
      console.log($modal);

      cy.wrap($modal).find("div[role = 'dialog']").within($dialog=>{
        console.log($dialog);
        console.log(cy.wrap($dialog));
        cy.wrap($dialog).children().first()
          .children().first()
          .children().last().find('h3').should('have.text',' ...Ops! ')

          cy.wrap($dialog).children().first()
          .children().first()
          .children().last().find('div').first().find('p').should('have.text',' il tuo carrello è vuoto ')

          cy.wrap($dialog)
          .children().last().find('span').first().find('button').first().should('have.text',' Torna ad Acquistare! ')
      });
    })
  });
  it('returns to home by clicking modal button', () => {
    cy.request('POST', 'http://localhost:3000/users/signIn', { email: 'majklzumberi00@gmail.com',password:"test123" })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('token') // true
      localStorage.removeItem("token");
      localStorage.setItem("token",response.body.token);
    })
    cy.get("app-modal div[role = 'dialog'").children().last().find('span').first().find('button').first().should('have.text',' Torna ad Acquistare! ').click();
    cy.url().should('eq','http://localhost:4200/home/clothes')
  });
  it('adds two products into cart', () => {
    cy.get(':nth-child(2) > .text-2xl').should('have.text','Not today')
    cy.get(':nth-child(2) > .flex > .w-full').should('have.text','personalizza ora').click()
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
    cy.request('POST', 'http://localhost:3000/users/signIn', { email: 'majklzumberi00@gmail.com',password:"test123" })
    .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('token') // true
      localStorage.removeItem("token");
      localStorage.setItem("token",response.body.token);
    })
    cy.get('app-modal  button').first().should('have.text',' continua a fare Shopping ').click();
    //cy.get('.sm\:ml-3 > .focus\:shadow-outline-green').should('have.text',' continua a fare Shopping ').click();

    cy.get(':nth-child(3) > .text-2xl').should('have.text','Supreme')
    cy.get(':nth-child(3) > .flex > .w-full').should('have.text','personalizza ora').click()
    cy.get('div.modal').should('not.be.visible');
    cy.get('#productColor > div').find('span').eq(2).click();// clicco quello giallo
    cy.get('#dressType > div > :nth-child(2)').click();
    cy.get('#customText').clear();
    cy.get('#customText').type('test da cypress')
    cy.get('#customTextColor > div').find('span').first().click();
    cy.get('form').find('button').last().click()
    cy.get('div.modal').should('have.css','opacity', '1');
    cy.get('div.modal').should('have.css','visibility', 'visible');
    cy.get('.relative > #text-card > .flex > span').should('have.text','Carrello (2)');
    cy.get('.mt-3 > .inline-flex').should('have.text',' vai al check-out ').click();
    cy.get('.items-center > .border-2').click()
    // sono al secondo step
    cy.get('button').last().should('have.text','prosegui').click()
    // sono al terzo step
    cy.contains('Prodotti acquistati')
    cy.contains('Prezzo')
    cy.contains('Spedizione')
    cy.contains('Indirizzo')
    cy.contains('Spedito al sig.')
    cy.get('.flex-col > .flex').find('button').last().should('have.text','Acquista').click()
    cy.contains('Acquisto effettuato con Successo!')
    cy.contains('ti abbiamo inviato una mail per il riepilogo del tuo ordine')
    cy.get('button').last().should('have.text',' continua a fare Shopping ').click();
  });
});

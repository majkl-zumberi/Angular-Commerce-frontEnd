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
    cy.contains('Colore testo')
    cy.get('form').within($form =>{
      cy.wrap($form).find('button').last().should('be.disabled').and('have.text','aggiungi al carrello')
      cy.contains('T-shirt')
      cy.contains('Felpa')
      cy.contains('Tuta')
      cy.get('#productColor > div').find('span').should($colorProductSpan=>{
        expect($colorProductSpan).to.have.length(6);
      const classes = $colorProductSpan.map((i, el) => {
        // console.log(el);
        expect(el).to.be.visible
        expect(el).not.to.be.disabled
        return Cypress.$(el).css('background-color')
      })
      //console.log(classes.get());
      expect(classes.get()).to.deep.eq([
        'rgb(255, 0, 0)',//red
        'rgb(255, 165, 0)',//orange
        'rgb(255, 255, 0)',//yellow
        'rgb(0, 128, 0)',//green
        'rgb(173, 216, 230)',//lightblue
        'rgb(0, 0, 255)'//blue
      ])
    })
      cy.get('#productColor > div').within($ContainerDressColorPicker =>{
          cy.wrap($ContainerDressColorPicker).children().should('have.length',6)
        // cy.wrap($ContainerDressColorPicker).find('span').first().and('not.be.disabled').and('be.visible')
        // cy.wrap($ContainerDressColorPicker).find('span').eq(1).and('not.be.disabled').and('be.visible')
        // cy.wrap($ContainerDressColorPicker).find('span').eq(2).and('not.be.disabled').and('be.visible')
        // cy.wrap($ContainerDressColorPicker).find('span').eq(3).and('not.be.disabled').and('be.visible')
        // cy.wrap($ContainerDressColorPicker).find('span').eq(4).and('not.be.disabled').and('be.visible')
        // cy.wrap($ContainerDressColorPicker).find('span').last().and('not.be.disabled').and('be.visible')
      })
      cy.get('#customText').within($input=>{
        cy.wrap($input).should('have.class','ng-untouched ng-pristine ng-valid').and('not.be.disabled').and('be.empty')
      })
      cy.get('#customTextColor > div').find('span').should(($span)=>{
        expect($span).to.have.length(2);
        const classesBG = $span.map((i, el) => {
          return Cypress.$(el).css('background-color')
        })
        // console.log(classes);
        // console.log(classes.get());
        // call classes.get() to make this a plain array
        expect(classesBG.get()).to.deep.eq([
          'rgb(255, 255, 255)',//bianco
          'rgb(0, 0, 0)'//nero
        ])
        const classesOpacity = $span.map((i, el) => {
          return Cypress.$(el).css('opacity')
        })
        // console.log(classes);
        // console.log(classes.get());
        // call classes.get() to make this a plain array
        expect(classesOpacity.get()).to.deep.eq([
          '0.3',//bianco
          '0.3'//nero
        ])
        const classesPointerEv = $span.map((i, el) => {
          return Cypress.$(el).css('pointer-events')
        })
        // console.log(classes);
        // console.log(classes.get());
        // call classes.get() to make this a plain array
        expect(classesPointerEv.get()).to.deep.eq([
          'none',//bianco
          'none'//nero
        ])
      })
    })
  });

  it('', () => {
    
  });
});

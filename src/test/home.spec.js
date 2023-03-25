describe('Home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('displays the dashboard title', () => {
      cy.get('h1').should('have.text', 'Dashboard');
    });
  
    it('displays 10 Pokemon cards', () => {
      cy.get('.card-container').find('.card').should('have.length', 10);
    });
    it('displays Pokemon info when a card is clicked', () => {
        cy.get('.card-container')
          .find('.card')
          .first()
          .click();
    
        cy.get('.modal').should('be.visible');
        cy.get('.modal h2').should('have.text', 'Bulbasaur');
        cy.get('.modal p').should('contain', 'Height');
        cy.get('.modal p').should('contain', 'Weight');
        cy.get('.modal p').should('contain', 'info');
    });
  });
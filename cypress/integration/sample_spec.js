describe('My First Test', function() {
    it('clicking "type" shows the right headings', function() {
      cy.visit('https://example.cypress.io/commands/querying')
  
      cy.get('.well>button:first')
        .should('contain', 'Button')
    })
  })
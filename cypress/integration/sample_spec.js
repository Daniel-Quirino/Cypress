describe('My First Test', function() {
    it('clicking "type" shows the right headings', function() {
      cy.visit('https://example.cypress.io/commands/querying')
  
      cy.get('.query-list')
        .contains('apples')
        .should('have.class', 'first')
    })
  })
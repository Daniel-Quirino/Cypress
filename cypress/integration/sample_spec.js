describe('My First Test', function() {
    it('clicking "type" shows the right headings', function() {
      cy.visit('https://example.cypress.io/commands/querying')
  
      cy.get('.query-form').within(() => {
        cy.get('input:first')
        .should('have.attr', 'placeholder')
        cy.get('input:last')
        .should('have.attr', 'placeholder', 'Password')
      })

    })
  })
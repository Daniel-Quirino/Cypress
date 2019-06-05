describe('My First cypress Test', function() {
    it('should load eemple webpage', function() {
      cy.visit('https://rockcontent.com/blog/exemplos-de-layout-para-blog/')

      cy.url().should('include', 'rockcontent.com/blog/exemplos-de-layout-para-blog/')
    })
})
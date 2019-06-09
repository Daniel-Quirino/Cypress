describe('My First cypress Test', function() {
    it('should load eemple webpage', function() {
      cy.visit("https://rockcontent.com/blog/exemplos-de-layout-para-blog/");

      cy.url().should('include', 'rockcontent.com/blog/exemplos-de-layout-para-blog/');

      cy.title().should('eq', '12 dicas e 10 inspiradores exemplos de layout para blog');

      // cy.get('h1').contains('12 dicas e 10 inspiradores exemplos de layout para blog');
      cy.get('h1').as('title')
      cy.get("@title").contains('12 dicas e 10 inspiradores exemplos de layout para blog');
    })
})


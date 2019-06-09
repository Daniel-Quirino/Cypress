describe('My First cypress Test', function() {

    before(function()  {
        // run once before all tests in the block
    })

    after(function() {
        // run once after all tests in the block
    })

    beforeEach(function()  {
        // run once before each tests in the block
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    afterEach(function() {
        // run once after each tests in the block
    })

    it('submit developer name', function() {
        cy.get("#developer-name")
            .type('Name')
        cy.get("#submit-button")
            .scrollIntoView()
        cy.get("#submit-button")
            .click()

        cy.get('.result-content')
            .should('be.visible')
        cy.url()
            .should('include', 'thank-you')
    })


    it('Coments in a text area', function(){
        cy.get("#tried-test-cafe")
            .click()

        cy.get("#comments").as("TextArea")

        cy.get("@TextArea")
            .should("have.value", '')
        
        cy.get("@TextArea")
            .type("New value")
    })


})


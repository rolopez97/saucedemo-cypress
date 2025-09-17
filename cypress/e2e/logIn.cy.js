describe("Sauce Demo Log in", () => {
    beforeEach(function (){
        cy.visit("https://www.saucedemo.com/");
    })

    it("Log in succesfully", () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

})
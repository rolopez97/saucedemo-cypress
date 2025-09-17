describe('SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })

    it('Login user correcto', () => {
   
        cy.assertion_text('.title', 'Products')
       
    });
    afterEach(() => {
        cy.logout()
    })
});
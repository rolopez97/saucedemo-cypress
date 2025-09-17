import homeSaucePage from '../pages/homeSaucePage'


describe("Sauce Demo Log in - Fixtures", () => {
    beforeEach(function (){
        cy.visit("https://www.saucedemo.com/");
        cy.fixture('credentials').then((credentials)=>{
            this.credentials = credentials
        })
    })

    it("Log in succesfully", function(){
        cy.typeLogin(this.credentials.standardUser, this.credentials.passwordOk)
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    })

    it("Log in - Locked out user", function(){
        cy.typeLogin(this.credentials.lockedUser, this.credentials.passwordOk)
        homeSaucePage.verifyLoginError(this.credentials.errorMessageLockedUser);

    })

    it("Log in - Incorrect password", function(){
        cy.typeLogin(this.credentials.standardUser, this.credentials.errorPassword)
        homeSaucePage.verifyLoginError(this.credentials.errorMessageIncorrectPassword);

    
    })
    
})
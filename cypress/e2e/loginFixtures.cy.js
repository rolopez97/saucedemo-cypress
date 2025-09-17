import homeSaucePage from '../pages/homeSaucePage'


describe("Sauce Demo Log in - Fixtures", () => {
    beforeEach(function (){
        cy.visit("https://www.saucedemo.com/");
        cy.fixture('credentials').then((credentials)=>{
            this.credentials = credentials
        })
    })

    it("Log in succesfully", function(){
        homeSaucePage.typeUsername(this.credentials.standardUser);
        homeSaucePage.typePassword(this.credentials.passwordOk);
        homeSaucePage.clickLogin();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');


    })

    it("Log in - Locked out user", function(){
        homeSaucePage.typeUsername(this.credentials.lockedUser);
        homeSaucePage.typePassword(this.credentials.passwordOk);
        homeSaucePage.clickLogin();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out')


    })
    it("Log in - Incorrect password", function(){
        homeSaucePage.typeUsername(this.credentials.standardUser);
        homeSaucePage.typePassword(this.credentials.errorPassword);
        homeSaucePage.clickLogin();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')


    })
    it.only("Log in - Error user", function(){
        homeSaucePage.typeUsername(this.credentials.errorUser);
        homeSaucePage.typePassword(this.credentials.passwordOk);
        homeSaucePage.clickLogin();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')


    })

})
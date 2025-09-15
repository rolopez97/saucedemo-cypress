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



})
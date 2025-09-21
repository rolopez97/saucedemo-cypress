import inventoryPage from '../pages/inventoryPage'

describe('SauceDemo - Home page POM', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })
    
    it('User logs in successfully and sees Products page', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        inventoryPage.checkTitle
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')

    });

    it('User adds a product to the cart', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.verifyBtnRemove('Sauce Labs Backpack')
        cy.get('[data-test="shopping-cart-link"]').should('exist').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        inventoryPage.verifyProdTitle('Sauce Labs Backpack')

    });  

    afterEach(() => {
        cy.logout()
    });

});



import inventoryPage from '../pages/inventoryPage'

describe('SauceDemo - Check out', () => {

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
        inventoryPage.verifyBtnRemove('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-link"]').should('exist').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        inventoryPage.verifyProdTitle('Sauce Labs Backpack')

    });  

     it('User adds a product to the cart', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.verifyBtnRemove('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-link"]').should('exist').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        inventoryPage.verifyProdTitle('Sauce Labs Backpack');

    }); 

      it('User goes to the checkout', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.verifyBtnRemove('Sauce Labs Backpack')
        cy.get('[data-test="shopping-cart-link"]').should('exist').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        inventoryPage.verifyProdTitle('Sauce Labs Backpack');
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        cy.get('#firstName').click().type('First name');
        cy.get('#lastName').click().type('Last name');
        cy.get('#postal-code').click().type('Postal code');
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        cy.get('#finish').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
        cy.get('#finish').click()



    }); 

    
    afterEach(() => {
        cy.logout()
    });

});



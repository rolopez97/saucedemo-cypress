describe('SauceDemo - Home page', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })
    
    it('User logs in successfully and sees Products page', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.assertion_text('.title', 'Products')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')

    });

    it('User adds a product to the cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain.text', 'Remove')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')

    });  

    it('Removes a product from the cart and continues shopping', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain.text', 'Remove')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    }); 

    afterEach(() => {
        cy.logout()
    });

});



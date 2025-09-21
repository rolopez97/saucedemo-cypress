class inventoryPage{
    elements = {
        menu:()=>cy.get("#react-burger-menu-btn"),
        logout: () => cy.get("[data-test='logout-sidebar-link']"),
        page_title: () => cy.get('[data-test="title"]'),
        icon_cart: () => cy.get('[data-test="shopping-cart-link"]'),
        icon_add: () => cy.get('[data-test="shopping-cart-badge"]'),
        product1: {
            img: () => cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]'),
            prod_title: () => cy.get('[data-test="inventory-item-name"]'),
            price: () => cy.get('[data-test="inventory-item-price"]'),
            btn_add: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
            btn_remove: () => cy.get('[data-test="remove-sauce-labs-backpack"]')
        },

    }

    checkTitle() {
        this.elements.page_title().should('have.text', 'Products')
    }

    verifyImage() {
        this.elements.product1.img().click()
    }

    verifyProdTitle(texto) {
        this.elements.product1.prod_title().should('have.text', texto)
    }

    verifyPrice(dato) {
        this.elements.product1.price().should('have.text', dato)
    }

    addToCart(){
        this.elements.product1.btn_add().click()
    }

    verifyBtnRemove(){
        this.elements.product1.btn_remove().should('exist')

    }
    clickIconCart() {
        this.elements.icon_cart().should('exist').click();
    }

}

export default new inventoryPage();
describe("Handling a product", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
    })
    context("Cart", () => {
        it("Add a product to cart", () => {
            // Assertion
            cy.get('[data-test="inventory-item"]').should("be.visible"); // Product added to cart
        })
        it("Remove a product from cart", () => {
            cy.get('[data-test="shopping-cart-link"]').click();
            cy.get('[data-test="remove-sauce-labs-backpack"]').click();
            // Assertion
            cy.get('[data-test="inventory-item"]').should("not.exist"); // Cart item was removed
        })
    })
    context("Checkout", () => {
        it("Order a product", () => {
            cy.get('[data-test="shopping-cart-link"]').click();
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type("Software");
            cy.get('[data-test="lastName"]').type("Tester");
            cy.get('[data-test="postalCode"]').type("123456");
            cy.get('[data-test="continue"]').click();
            cy.get('[data-test="finish"]').click();
            // Assertion
            cy.url().should("include", "/checkout-complete.html"); // Checkout completed
        })
    })
})
describe("Looking for information", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    })
    context("Side menu", () => {
        it("Open side menu", () => {
            cy.get("#react-burger-menu-btn").click();
            // Assertion
            cy.get('.bm-menu').should("exist"); // Menu is opened
        })
        it("Close side menu", () => {
            cy.get("#react-burger-menu-btn").click();
            cy.get("#react-burger-cross-btn").click();
            // Assertion
            cy.get('.bm-menu').should("not.be.visible"); // Menu was closed
        })
    })
    
    context("Product navigation", () => {
        it("Find more product details", () => {
            cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click(); // This item has an ID of 4
            // Assertion
            cy.get('.inventory_details_desc_container').should("be.visible"); // Details are visible
        })
        it("Test back-to-products button", () => {
            cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
            cy.get('[data-test="back-to-products"]').click();
            // Assertion
            cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); // Redirect to products page
        })
    })
})
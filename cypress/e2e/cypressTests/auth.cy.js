describe("Authenticating into website", () => {
    beforeEach(() => {
            cy.visit("https://www.saucedemo.com");
            cy.get('[data-test="username"]').type("standard_user");
    })
    context("Login", () => {
        it("Log in with wrong user/pass", () => {
            cy.get('[data-test="password"]').type("123456"); // Wrong pass
            cy.get('[data-test="login-button"]').click();
            // Assertion
            cy.get('[data-test="error"]').should("exist"); // Error should appear
        })
        it("Log in with standard user", () => {
            cy.get('[data-test="password"]').type("secret_sauce"); // Correct pass
            cy.get('[data-test="login-button"]').click();
            // Assertion
            cy.url().should("include", "/inventory.html"); // Login was successful
        })
    })
    context("Logout", () => {
        it("Log out of website", () => {
            cy.get('[data-test="password"]').type("secret_sauce");
            cy.get('[data-test="login-button"]').click();
            cy.get("#react-burger-menu-btn").click();
            cy.get('[data-test="logout-sidebar-link"]').click();
            // Assertion
            cy.url().should("eq", "https://www.saucedemo.com/"); // Go back to login page
        })
    })
})
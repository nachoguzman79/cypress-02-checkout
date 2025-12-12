const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");

describe("Checkout Flow - Saucedemo", () => {
  beforeEach(() => {
    
    cy.visit("/");

    // Login
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("Completes the full checkout process", () => {

    InventoryPage.addToCartFirstItem();

    InventoryPage.goToCart();

    CartPage.clickCheckout();

    // Complete checkout info
    CheckoutPage.fillInfo("Nacho", "Guzman", "12345");

    CheckoutPage.continue();

    CheckoutPage.finish();

    // Verify we are in the correct page
    cy.url().should("include", "/checkout-complete.html");

    // Verify success message (case-insensitive + timeout)
   cy.contains(/thank You for your order!/i, { timeout: 10000 }).should("be.visible");

  });
});

class CartPage {
  checkoutButton = "#checkout";

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }
}

module.exports = new CartPage();

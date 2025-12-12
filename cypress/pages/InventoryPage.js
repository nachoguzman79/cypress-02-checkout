class InventoryPage {

  addToCartFirstItem() {
    cy.get(".inventory_item").first().find("button").click();
  }

  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
}

module.exports = new InventoryPage();

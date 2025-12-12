class CheckoutPage {
  firstName = "#first-name";
  lastName = "#last-name";
  postalCode = "#postal-code";
  continueButton = "#continue";
  finishButton = "#finish";

  fillInfo(name, last, zip) {
    cy.get(this.firstName).type(name);
    cy.get(this.lastName).type(last);
    cy.get(this.postalCode).type(zip);
  }

  continue() {
    cy.get(this.continueButton).click();
  }

  finish() {
    cy.get(this.finishButton).click();
  }
}

module.exports = new CheckoutPage();

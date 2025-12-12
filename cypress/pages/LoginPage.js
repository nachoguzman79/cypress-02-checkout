class LoginPage {
  usernameField = "#user-name";
  passwordField = "#password";
  loginButton = "#login-button";

  login(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }
}

module.exports = new LoginPage();

# Cypress Automation Project - Saucedemo Checkout

[![Cypress Tests](https://github.com/nachoguzman79/cypress-02-checkout/actions/workflows/cypress.yml/badge.svg)](https://github.com/nachoguzman79/cypress-02-checkout/actions/workflows/cypress.yml)

## Project Description

This project contains end-to-end (E2E) tests for the checkout flow in [Saucedemo](https://www.saucedemo.com) using Cypress and the Page Object Model (POM) structure.

## Features / Test Scenarios

- Login with valid credentials
- Add item(s) to the cart
- Complete checkout flow (fill information, continue, finish)
- Verify success message: `Thank you for your order!`

## Project Structure

cypress-saucedemo-checkout/
├── cypress/
│ ├── e2e/
│ │ └── checkout.cy.js
│ ├── pages/
│ │ ├── LoginPage.js
│ │ ├── InventoryPage.js
│ │ ├── CartPage.js
│ │ └── CheckoutPage.js
│ └── support/
│ ├── commands.js
│ └── e2e.js
├── cypress.config.js
├── package.json
└── package-lock.json


## Installation
npm install

## Running Tests
+ UI Mode (Interactive): npx cypress open
+ Headless Mode (CLI): npx cypress run

## CI/CD - GitHub Actions

The workflow runs Cypress tests automatically on every push or pull request to the main branch. The badge above shows the current build status.

## Author

Ignacio Guzman





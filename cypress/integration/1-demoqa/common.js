/// <reference types="cypress" />

export function goToBookstore() {
    cy.contains('Book Store Application').should('exist').click()
}

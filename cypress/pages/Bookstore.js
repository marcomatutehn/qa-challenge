export class Bookstore {
    goToBookstore() {
        cy.contains('Book Store Application').should('exist').click()
    }
}

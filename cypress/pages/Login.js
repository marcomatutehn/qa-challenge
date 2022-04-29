export class Login {
    navigate() {
        cy.visit('https://demoqa.com/');
    }

    login(userName, password) {
        cy.get('#userName').type(userName);
        cy.get('#password').type(password);
        cy.get('#login').click();
        return this;
    }
}

/// <reference types="cypress" />
import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";
import {Logout} from "../../pages/Logout";

const login = new Login();
const logout = new Logout();
const bookstore = new Bookstore();

const user_name = Cypress.env('userName');
const password = Cypress.env('password');

describe('Profile in DEMOQA ', () => {
    before(() => {
        login.navigate();
    })

    describe('Scenario 1 - User is able to logout from profile', () => {

        it('should open bookstore section', () => {
            bookstore.goToBookstore();
        });
        it('should open login', () => {
            cy.contains('Login').should('exist').click()
        });
        it('should login into DemoQA', () => {
            login.login(user_name, password);
        });
        it('should validate user login succesfull ', () => {
            cy.url().should('eq', `${Cypress.config('baseUrl')}/profile`);
        });
        it('should logout from profile ', () => {
            logout.logout();
        });
    });

    describe('Scenario 2 - User is able to open a book from their profile', () => {
        it('should open bookstore section', () => {
            bookstore.goToBookstore();
        })
        it('should open login', () => {
            cy.contains('Login').should('exist').click()
        });
        it('should login into DemoQA', () => {
            login.login(user_name, password);
        })

        it('should open the first book in their profile', () => {
            cy.wait(2000)
            cy.get('.mr-2').should('exist').first().click()
        })
        it('should go back to book store', () => {
            cy.get('#addNewRecordButton').should('exist').click()
        });
    })


})

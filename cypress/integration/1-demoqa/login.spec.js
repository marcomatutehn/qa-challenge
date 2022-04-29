/// <reference types="cypress" />

import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";
import {Logout} from "../../pages/Logout";

const login = new Login();
const logout = new Logout();
const bookstore = new Bookstore();

const userName = Cypress.env('userName');
const password = Cypress.env('password');

const randomUser = 'User' + Math.random() * 100

describe('Login into DEMOQA ', () => {
    before(() => {
        login.navigate();
        //cy.visit('https://demoqa.com/');
    })

    it('Open bookstore section', () => {
        bookstore.goToBookstore();
        //cy.contains('Book Store Application').should('exist').click()
    })

    describe('Scenario 1 - Login into DemoQA', () => {
        it('should open login', () => {
            cy.contains('Login').should('exist').click()
        });

        it('should login into DemoQA', () => {
            login.login(userName, password);
        })
        it('should logout from DemoQA ', () => {
            logout.logout();
        });
    })

    describe('Scenario 2 - Create a new user', () => {

        it('should register into DemoQA', () => {
            cy.get('#newUser').should('exist').click()
        })
        it('should create a new random user', () => {
            cy.get('#firstname').should('exist').type(userName);
            cy.get('#lastname').should('exist').type(userName);
            cy.get('#userName').should('exist').type(userName);
            cy.get('#password').should('exist').type(password);
        });
        it('should click on captcha', () => {
            cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('exist').click({force: true});
        });
        it('should click on submit', () => {

        });
    })

})

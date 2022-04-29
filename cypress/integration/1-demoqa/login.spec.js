/// <reference types="cypress" />

import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";

const login = new Login();
const bookstore = new Bookstore();

describe('Login into DEMOQA ', () => {
    before(() => {
        login.navigate();
        //cy.visit('https://demoqa.com/');
    })

    it('Open bookstore section', () => {
        bookstore.goToBookstore();
        //cy.contains('Book Store Application').should('exist').click()
    })

    describe('Scenario 1', () => {

        it('Bookstore', () => {
            cy.log('it works')
        })
    })

    describe('Scenario 2', () => {

        it('Bookstore', () => {
            cy.log('it works')
        })
    })

})

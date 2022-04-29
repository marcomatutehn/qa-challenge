/// <reference types="cypress" />

import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";

const login = new Login();
const bookstore = new Bookstore();

let search_book = 'Git Pocket Guide';

describe('Bookstore DEMOQA ', () => {
    before(() => {
        login.navigate();
    })

    it('Open bookstore section', () => {
        bookstore.goToBookstore();
    })

    describe('Scenario 1 - Should search a book from BookStore', () => {
        it('should search a book ', () => {
            cy.wait(2000)
            cy.get('#searchBox').should('exist').type(`${search_book}`)
        });
    })

    describe('Scenario 2 - Open a book from results', () => {
        it('should click and open the first result ', () => {
            cy.get('.mr-2').should('exist').first().click()
        })
    })


})

/// <reference types="cypress" />

import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";

const login = new Login();
const bookstore = new Bookstore();

describe('Bookstore DEMOQA ', () => {
    before(() => {
        login.navigate();
    })

    it('Open bookstore section', () => {
        bookstore.goToBookstore();
    })

    describe('Scenario 1', () => {

        it('Bookstore', () => {
            cy.log('It works')
        })
    })

    describe('Scenario 2', () => {

        it('Bookstore', () => {
            cy.log('It works')
        })
    })


})

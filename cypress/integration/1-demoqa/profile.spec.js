/// <reference types="cypress" />
import {goToBookstore} from './common';

const URL_DEMOQA = '/';

describe('Profile in demoqa ', () => {
    before(() => {
        cy.visit(URL_DEMOQA)
    })

    it('Open bookstore section', () => {
        goToBookstore();
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

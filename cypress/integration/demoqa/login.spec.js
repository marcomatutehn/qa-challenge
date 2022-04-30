/// <reference types="cypress" />

import {Login} from "../../pages/Login";
import {Bookstore} from "../../pages/Bookstore";
import {Logout} from "../../pages/Logout";

const login = new Login();
const logout = new Logout();
const bookstore = new Bookstore();

const user_name = Cypress.env('userName');
const password = Cypress.env('password');

const user_name_negative = Cypress.env('userName') + Math.random() * 10;
const password_negative = Cypress.env('password') + Math.random() * 10;

const randomUser = 'User' + Math.random() * 100

describe('Login into DEMOQA ', () => {
    before(() => {
        login.navigate();
    })

    it('Open bookstore section', () => {
        bookstore.goToBookstore();
    })

    describe('Scenario 1 - Login into DemoQA', () => {
        it('should open login', () => {
            cy.contains('Login').should('exist').click()
        });
        it('should login into DemoQA', () => {
            login.login(user_name, password);
        })
        it('should logout from DemoQA ', () => {
            logout.logout();
        });
    })

    describe('Scenario 2 - Fail Login into DemoQA', () => {
        it('should open login', () => {
            cy.contains('Login').should('exist').click()
        });
        it('should login into DemoQA', () => {
            login.login(user_name_negative, password_negative);
        })
        it('should validate error message after login on DemoQA ', () => {
            cy.get('#name').should('contain.text', 'Invalid username or password!')
        });
    })

    describe('Scenario 3 - Creation a new user, negative scenario', () => {

        it('should register into DemoQA', () => {
            cy.get('#newUser').should('exist').click()
        });
        it('should create a new random user', () => {
            cy.get('#firstname').should('exist').type(`${user_name}`);
            cy.get('#lastname').should('exist').type(`${user_name}`);
            cy.get('#userName').should('exist').type(`${randomUser}`);
            cy.get('#password').should('exist').type(`${password}`);
        });
        it('should click on captcha', () => {
            cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('exist').click({force: true});
        });
        it('should click on register', () => {
            cy.get('#register').should('exist').click()
        });
        it('should display a error message on register of a new user on demoQA', () => {
            cy.get('#name').should('contain.html', 'Please verify reCaptcha to register!')
        });
    })

    describe('Scenario 4 - Login via API', () => {
        it('Generate Token via API', () => {
            cy.request({
                method: 'POST',
                url: `${Cypress.config('baseUrl')}/Account/v1/GenerateToken`,
                body: {
                    userName: user_name,
                    password: password,
                },
            }).then(($response) => {
                expect($response.status).to.eq(200);
                expect($response.body.token).to.exist;
                expect($response.body.status).to.eq('Success');
            });
        });
    });
})

// to run these tests you need to install cypress // visit cypress documentation for more details: 
// "https://docs.cypress.io/guides/getting-started/installing-cypress" 
// after installing cypress, you need to move this file to this location "./cypress/integration/THIS_FILE.js" 
// then remove the '//' from the following line and go ahead and run cypress tests :) 

// /// <reference types="cypress" /> 

// you can change the port number, but in my case it's 3000 
let PORT_NUMBER = 3000;
const RICKANDMORTY_URL = `http://localhost:${PORT_NUMBER}/`;

describe('Rick and Morty API React Application E2E testing', () => {

    beforeEach(() => {

        cy.visit(RICKANDMORTY_URL)
        
    })

    it('should open rick and morty application homepage', () => {
        
        const currentUrl = cy.url();

        currentUrl.should('equal', RICKANDMORTY_URL)
    })

    it('should have rick and morty title', () => {
        
        const title = cy.title();
        title.should('not.be.empty')
        .and('equal', "Rick and Morty")
        .and('have.length.greaterThan', 5);
        
    })


    it('should search characters by name', () => {

        cy.get('.form-control').should('exist');
        
        cy.get('.form-control').type('alexander')
        cy.get('.character-name').contains('Alexander');
        
    })

    it.only('should search characters by gender', () => {

        cy.get('.gender-list').should('exist');
        
        cy.get('.gender-list').select('male')
        cy.get('.character-gender').contains('Male');
        cy.get('.character-gender').contains('Female').should('not.exist');
        
    })

    it('should search characters by status', () => {

        cy.get('.status-list').should('exist');
        
        cy.get('.status-list').select('unknown')
        cy.get('.character-status').contains('unknown');
        
    })

    it('should search characters by name, gender and status at the same time', () => {

        cy.get('.form-control').type('morty')
        cy.get('.gender-list').select('unknown')
        cy.get('.status-list').select('unknown')

        cy.get('.character-name:nth-child(1)').contains('Dipper and Mabel Mortys');
        
    })

})
/// <reference types ="cypress" />

describe('regression test ', function(){
    it.only(' client pagination ', function(){
        cy.log('client pagination ')
        cy.log('1-login 2-click on client  3- change pagination  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)
        cy.truflalogins()
        cy.wait(8000)
        cy.get('[href="/clients"]').click();
        cy.wait(8000)


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.tru-select').select('10');
        cy.wait(8000)
        cy.get('.tru-select').select('15');
        cy.wait(8000)
        cy.get('.tru-select').select('20');
        cy.wait(8000)
        cy.get('.tru-select').select('5');
        cy.wait(8000)
        /* ==== End Cypress Studio ==== */
    })

    
})
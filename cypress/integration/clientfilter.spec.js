/// <reference types ="cypress" />

describe('regression test ', function(){
    it.only(' client filter ', function(){
        cy.log('filter all client  ')
        cy.log('1-login 2-enter client dashboard 3- filter  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()
        cy.wait(8000)
        cy.get('[href="/clients"]').click();
        cy.wait(8000)


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.filter-icon > .tru-icon').click({force: true});
        cy.wait(8000)
        cy.get('[data-title="Lead"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force: true});
        cy.wait(8000)
        cy.get('h1').click();
        cy.wait(8000)
        cy.get('.filter-icon > .tru-icon').click({force: true});
        cy.wait(8000)
        cy.get('[data-title="Lead"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force: true});
        cy.wait(8000)
        cy.get('.tru-app-content').click({force: true});
        cy.wait(8000)
        cy.get('.filter-icon > .tru-icon > path').click({force: true});
        cy.wait(8000)
        cy.get('[data-title="VIP"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force: true});
        cy.wait(8000)
        cy.get('h1').click({force: true});
        cy.wait(8000)
        cy.get('.filter-icon > .tru-icon > path').click({force: true});
        cy.wait(8000)
        cy.get('[data-title="VIP"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force: true});
        cy.wait(8000)
        cy.get('[data-title="Lost"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force: true});
        cy.wait(8000)
        cy.get('[data-title="Lost"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force: true});
        cy.wait(8000)
        cy.get('[data-title="Client"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force: true});
        cy.wait(8000)
        cy.get('[data-title="Client"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force: true});
        cy.wait(8000)
        cy.get('h1').click({force: true});
        cy.wait(8000)
        /* ==== End Cypress Studio ==== */
    })

    
})
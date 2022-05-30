/// <reference types ="cypress" />

describe('regression test ', function(){
    it(' search', function(){
        cy.log('search for client  ')
        cy.log('1-login 2-click on search bar  3- search for client  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)
     cy.truflalogins()


     cy.wait(8000)




     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.tru-search-bar > .false').clear();
     cy.get('.tru-search-bar > .false').type('clie');
     cy.wait(8000)
     cy.get(':nth-child(3) > .tru-contact > .info-container > .name > .highlight-wrapper > :nth-child(3)').click();
     /* ==== End Cypress Studio ==== */
    })

   

})
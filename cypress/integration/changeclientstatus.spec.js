/// <reference types ="cypress" />

describe('regression test ', function(){
    it(' change status', function(){
        cy.log('change status to client  ')
        cy.log('1-login 2-click on client  3- enter any client  4- change status  ')
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
     cy.wait(8000)

     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.caret-up-and-down > .tru-button > span > .tru-icon').click({force: true});
     cy.wait(8000)

     cy.get('.current > label').click({force: true});
     cy.wait(8000)
     cy.get('.current > label').click({force: true});
     cy.wait(8000)
     cy.get('.current > label').click({force: true});
     cy.wait(8000)
     cy.get('.current > label').click({force: true});
     cy.wait(8000)
     cy.get('.caret-up-and-down > .tru-button > span > .tru-icon').click({force: true});
     cy.wait(8000)
     /* ==== End Cypress Studio ==== */
    })

   

})
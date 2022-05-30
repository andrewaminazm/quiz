/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('assign request to me & broker ', function(){
        cy.log('assign request to me & broker')
        cy.log('1-login 2-press the assign button 3- asign request to me or other 4-enter description')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()

        cy.wait(6000)


        /* ==== Generated with Cypress Studio ==== */


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .tru-icon > g > [cy="7"]').click({force: true});
        cy.wait(9000)
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .animate__animated > .tru-close-request > span').click({force: true});
        cy.wait(9000)
        cy.get(':nth-child(3) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .tru-icon > g > [cy="2"]').click({force: true});
        cy.wait(9000)
        cy.get(':nth-child(3) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .animate__animated > .tru-close-request > span').click({force: true});
        cy.wait(9000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Canceled"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
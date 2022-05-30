/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('cancel new request  ', function(){
        cy.log('cancel request ')
        cy.log('1-login 2-open request page with screen width over 700  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)
cy.viewport('ipad-2')
        cy.truflalogins()

       


        cy.wait(8000)
        cy.get('.tru-select').select('10');
        cy.wait(8000)
        cy.get('.tru-select').select('15');
        cy.wait(8000)
        cy.get('.tru-select').select('20');
        cy.wait(8000)
        cy.get('.tru-select').select('5');
        cy.wait(8000)

       
    })
   

   
 
})
/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('asc&desc  ', function(){
        cy.log('filter reqeust according to status ')
        cy.log('1-login 2-press the creat date 3- choose any asc or desc  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()

        cy.wait(6000)


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon > #UI > #Requests---Listing---Table > #Group-22 > #arrow-up').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(5) > .sort-arrows > .tru-icon > #UI > #Requests---Listing---Table > #Group-22 > #arrow-up').click({force: true});
        cy.wait(4000)
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
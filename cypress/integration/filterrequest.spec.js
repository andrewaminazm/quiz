/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('filter request  ', function(){
        cy.log('filter reqeust according to status ')
        cy.log('1-login 2-press the  filter button3- choose any status ')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()

        cy.wait(6000)


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="New"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="New"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Completed"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force:true});
        cy.wait(4000)
        cy.get('.tru-app-content').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Completed"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Canceled"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Canceled"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .list-filter > .filter-icon > .tru-icon > path').click({force:true});
        cy.wait(4000)
        cy.get('[data-title="Others"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').check({force:true});
        cy.wait(4000)
        cy.get('h1').click({force:true});
        cy.wait(4000)
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
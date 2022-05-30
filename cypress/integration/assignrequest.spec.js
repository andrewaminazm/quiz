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
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .tru-icon > g > [cy="7"]').click({force: true});

        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .animate__animated > .tru-assign-request > span').click({force: true});

        cy.wait(6000)
        cy.get('.without-search-icon-input').clear({force: true});
        cy.wait(4000)
        cy.get('.without-search-icon-input').type('ah');
        cy.wait(6000)
        cy.get('[value="adf297e1-8ff7-405f-bd41-ce20f5dbed05"]').click({force: true})
        cy.wait(4000)
        cy.get('.tru-textarea').click();
        cy.get('.tru-textarea').type('aaaaaaa')
        cy.wait(4000)

        cy.get('.tru-content > .primary').click({force: true});
        cy.wait(4000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.filters-buttons > div > .primary > span').click({force: true});
        cy.get(':nth-child(4) > .list-filter > .filter-icon > .tru-icon > path').click({force: true});
        cy.get('[data-title="Me"] > .tru-form-item > .custom-checkbox > .tru-boolean-input').uncheck({force: true});
        cy.get('.filters-buttons').click({force: true});
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .tru-icon').click({force: true});

        cy.wait(4000)
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .tru-icon > g > [cy="7"]').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .cell-to-show > :nth-child(1) > .tru-dropdown-menu > .animate__animated > .tru-assign-request > span').click({force: true});
        cy.wait(4000)
        cy.get('.without-search-icon-input').clear({force: true});
        cy.wait(4000)
        cy.get('.without-search-icon-input').type('andrew');
        cy.wait(6000)
        cy.get('[value="79cc7cc4-82f8-419b-8a65-3fd102697a90"]').click({force: true});
        cy.wait(4000)
        cy.get('.tru-textarea').click();
        cy.get('.tru-textarea').type('aaaaaaa')
        cy.wait(4000)

        cy.get('.tru-content > .primary').click({force: true});
        cy.wait(4000)

        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
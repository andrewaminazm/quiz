/// <reference types ="cypress" />

describe('regression test ', function(){
    it(' change client details ', function(){
        cy.log('change details ')
        cy.log('1-login 2-click on any client  3- enter dashboard and change details ')
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
     cy.get(':nth-child(5) > .tru-editable-field > :nth-child(1) > .edit-icon-wrapper > .tru-icon > use').click({force: true});
     cy.wait(8000)
     cy.get('.tru-text-input').clear({force: true});
     cy.wait(8000)
     cy.get('.tru-text-input').type('w2wwww{enter}',{force: true});
     cy.wait(8000)
     cy.get('.label-icon-wrapper > .edit-icon-wrapper > .tru-icon > use').click({force: true});
     cy.wait(8000)
     cy.get('.tru-select').select('Facebook',{force: true});
     cy.wait(8000)
     /* ==== End Cypress Studio ==== */
    })

   

})
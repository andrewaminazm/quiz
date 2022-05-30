/// <reference types ="cypress" />

describe('searchactivity', function(){
    it(' search', function(){
     cy.truflalogins()
     const fileName = 'SampleFile.pdf';

     cy.wait(8000)




     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.tru-search-bar > .false').clear();
     cy.get('.tru-search-bar > .false').type('andrew');
     cy.wait(8000)
     cy.get(':nth-child(3) > .tru-contact > .info-container > .name > .highlight-wrapper > :nth-child(3)').click();
     cy.wait(8000)
     cy.get('#react-tabs-2').click()
     cy.wait(8000)


     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.filter-option-caretDown > .tru-icon').click();
     cy.get('.animate__animated > :nth-child(2) > :nth-child(1) > span').click();
     cy.get('.attachment-search-bar > .tru-search-bar > .false').clear();
     cy.get('.attachment-search-bar > .tru-search-bar > .false').type('po');
     cy.get('.attachment-search-bar > .tru-search-bar > .false').click();
     cy.get('.attachment-selected-filter-option-text').click();
     cy.get('.animate__animated > :nth-child(3) > :nth-child(1) > span').click();
     cy.get('.attachment-search-bar > .tru-search-bar > .false').clear();
     cy.get('.attachment-search-bar > .tru-search-bar > .false').type('datalock');
     /* ==== End Cypress Studio ==== */
    })

})
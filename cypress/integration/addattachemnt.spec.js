/// <reference types ="cypress" />

describe('regression', function(){
    it(' attachment', function(){
        cy.log('add attachment for client ')
        cy.log('1-login 2-open client  3- click on attachment tab and click continue ')
        cy.log('see the steps executed below ')
        cy.wait(6000)
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
     cy.get('.right > .primary').click()
     cy.get('.tru-text-input').clear()
     cy.get('.tru-text-input').type('assa')
     cy.get('.upload').attachFile(fileName, { subjectType: 'drag-n-drop' })
     cy.get('.ant-form-item-control-input-content > .primary').click()
     cy.wait(8000)

     
     /* ==== End Cypress Studio ==== */
    })

})
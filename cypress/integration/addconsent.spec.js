/// <reference types ="cypress" />

describe('regression', function(){
    it(' add  consent to client ', function(){
        cy.log('creat a new consent to client ')
        cy.log('1-login 2-open client dashboard  3-  click on consent  4-fill menu ')
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
     cy.get('#react-tabs-6').click({force: true});
     cy.wait(4000)
     cy.get('.tru-column > .default > span').click({force: true});
     cy.wait(4000)
     cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear()
     cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('qqwqqw')
     cy.get(':nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear()
     cy.get(':nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('11111111')
     cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear()
     cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aswwwwwwqqqqqqqwwwdasda@gmail.com')
     cy.get(':nth-child(1) > .radio-button').click({force: true})
     cy.get('.ant-form-item-control-input-content > .primary').click({force: true})
     
     /* ==== End Cypress Studio ==== */
    })

})
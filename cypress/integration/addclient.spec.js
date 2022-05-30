/// <reference types ="cypress" />

describe('regression', function(){
    it.only(' add a clients', function(){
        cy.log('create a new client') 
        cy.log('1-login 2-add a new client 3- fill menu  ')
        cy.log('see the steps executed below ')
        cy.wait(6000)
        cy.truflalogins()
        cy.wait(8000)
        cy.get('[href="/clients"]').click();
        cy.wait(8000)



        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.header-right > :nth-child(2) > .tru-button > :nth-child(1)').click({force:true});
        cy.get('[href="/?new=client"]').click({force:true});
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force:true})
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('000000',{force:true})
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force:true})
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aaaaaswwwwwwwwwwweseeeeeeeessssss@gmail.com',{force:true})
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force:true})
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aaaaaaaasdadsa',{force:true})
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force:true})
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('andrewcompany',{force:true})
        cy.get('.ant-form-item-control-input-content > .primary').click({force:true});
    })

    
})
/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('new request  ', function(){
        cy.log('creat a new request for new client ')
        cy.log('1-login 2-add a new reqeust 3- add a new client 4-fill pop-over menu and click continue ')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()

        cy.wait(6000)


        cy.wait(8000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.header-right > :nth-child(2) > .tru-button > :nth-child(1)').click();
        cy.wait(5000)
        cy.get('[href="/?new=request"]').click();
        cy.wait(8000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.tru-button > span > div').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('1111111111',{force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('annqw@gmail.com',{force: true});
        cy.wait(4000)
        
        
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('asssassssssssssssssss',{force: true});
        cy.wait(4000)
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aaaaaaaaaaaba',{force: true});
        cy.wait(4000)
      
        
        cy.get('.ant-form-item-control-input-content > .primary > span').click({force: true});
        cy.wait(4000)
        cy.get('.outline-primary').click({force:true});
        cy.wait(4000)
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
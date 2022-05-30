/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('search reqeust   ', function(){
        cy.log('search inside request application  ')
        cy.log('1-login 2-add a new reqeust 3- search in application  ')
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
        cy.wait(5000)
        cy.get('.client-name-and-add-user-icon > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .search-input > .tru-search-bar > .without-search-icon-input').clear();
        cy.wait(5000)
        cy.get('.client-name-and-add-user-icon > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .search-input > .tru-search-bar > .without-search-icon-input').type('a');
        cy.wait(5000)
        cy.get('[value="4ab1c81a-018e-4a56-912f-2e8927c54295"]').click({force:true})
        cy.get('.outline-primary > span').click();

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.wait(9000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.tru-row > :nth-child(1) > .tru-search-bar > .false').clear();
        cy.wait(5000)
        cy.get('.tru-row > :nth-child(1) > .tru-search-bar > .false').type('country{enter}');
        cy.wait(5000)
        cy.get('.tru-row > :nth-child(1) > .tru-search-bar > .false').clear();
        cy.wait(5000)
        cy.get('.tru-row > :nth-child(1) > .tru-search-bar > .false').type('name{enter}');
        cy.wait(5000)
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('new request  ', function(){
        cy.log('creat a new request for old client ')
        cy.log('1-login 2-add a new reqeust 3- fill pop-over menu and click continue  4- fill cfc application field 5- click get quote ')
        cy.log('see the steps executed below ')
        cy.wait(6000)

        cy.truflalogins()

        cy.wait(6000)


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
        cy.wait(9000)
        /* ==== End Cypress Studio ==== */



        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > .tru-button > :nth-child(1) > span').click({force:true});
        cy.get(':nth-child(4) > .tru-button').click({force:true});
        cy.get(':nth-child(3) > .tru-button > :nth-child(1) > span').click({force:true});
        cy.get(':nth-child(1) > .tru-button > :nth-child(1) > span').click({force:true});
        cy.get('.location-search-input').type('123',{force:true});
        cy.wait(5000)
        cy.get('.autocomplete-dropdown-container > :nth-child(1) > span').click({force:true});
        cy.wait(5000)
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(3) > .tru-form-item').click({force:true});
        cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-text-input').clear({force:true});
        cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-text-input').type('www.trufla.com',{force:true});
        cy.get('.tru-currency-input > .tru-text-input').clear({force:true});
        cy.get('.tru-currency-input > .tru-text-input').type('1,000,000',{force:true});
        cy.get(':nth-child(10) > .tru-form-item').click({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(3) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('Lockton Companies, LLC - Chicago, IL',{force:true});
        cy.get('.ant-select-selection-item').click({force:true});
        cy.get('#rc_select_1').clear({force:true});
        cy.get('#rc_select_1').type('rest',{force:true});
        cy.wait(4000)
        cy.get('.ant-select-item-option-content > span').click({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(3) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
        cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
        cy.get(':nth-child(5) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('30 Days',{force:true});
        
        cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(5)').click({force:true});
        cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(3) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item').click({force:true});
        cy.get(':nth-child(4) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(5) > .tru-form-item').click({force:true});
        cy.get(':nth-child(5) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(3) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('25000',{force:true});

        cy.get(':nth-child(6) > div > .tru-button').click({force:true});
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        /* ==== End Cypress Studio ==== */
    })


})
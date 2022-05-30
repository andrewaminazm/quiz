/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('new request  ', function(){
        cy.log('creat a new request for old client ')
        cy.log('1-login 2-add a new reqeust 3- fill pop-over menu and click continue  4- fill cfc application field 5- click get quote  6- bind quote 7- click on profile')
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
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('111111111111',{force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('bnnwesnnaasax@gmail.com',{force: true});
        cy.wait(4000)


        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').click({force: true});
        cy.wait(4000)
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aasswsqa',{force: true});
        cy.wait(4000)
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').clear({force: true});
        cy.wait(4000)
        cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-text-input').type('aaaaawaaawaer',{force: true});
        cy.wait(4000)


        cy.get('.ant-form-item-control-input-content > .primary > span').click({force: true});
        cy.wait(4000)
        cy.get('.outline-primary').click({force:true});
        cy.wait(4000)
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.wait(9000)
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.boolean-select-wrapper > :nth-child(1) > .ant-checkbox > .ant-checkbox-inner').click({force:true});
        cy.wait(5000)
        cy.get('.boolean-select-wrapper > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').uncheck({force:true});
        cy.wait(5000)
        cy.get(':nth-child(4) > .ant-checkbox > .ant-checkbox-inner').click({force:true});
        cy.wait(5000)
        cy.get(':nth-child(4) > .ant-checkbox > .ant-checkbox-input').check({force:true});
        cy.wait(5000)
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item').click({force:true});
        cy.wait(5000)
        cy.get('.location-search-input').clear({force:true});
        cy.wait(5000)
        cy.get('.location-search-input').type('123',{force:true});
        cy.wait(5000)
        cy.get('.autocomplete-dropdown-container > :nth-child(1) > span').click({force:true});
        cy.wait(5000)
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
        cy.wait(5000)
        cy.get(':nth-child(8) > .tru-form-item > .tru-column > .tru-text-input').click({force:true}).type('andrew.a@trufla.com',{force:true});
        cy.wait(5000)

        cy.get(':nth-child(9) > .tru-form-item > .tru-column > .tru-text-input').click({force:true}).type('www.apitest.com',{force:true});

        cy.wait(5000)
        cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').scrollIntoView()
        cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').clear({force:true});
        cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').type('1,000,000',{force:true});
        cy.get(':nth-child(10) > .tru-form-item').click({force:true});
        cy.get('.ant-select-selection-item').click({force:true});
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content > span').click({force:true});
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(5) > .tru-layout-Section > :nth-child(2) > .control-wrapper > .tru-form-item').scrollIntoView()
        cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(5) > .tru-layout-Section > :nth-child(2) > .control-wrapper > .tru-form-item').click({force:true});
        cy.get(':nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(1) > input').check({force:true});
        cy.get(':nth-child(2) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('Less than $10,000',{force:true});
        cy.get(':nth-child(4) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
        cy.get(':nth-child(5) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(1) > input').check({force:true});
        cy.wait(5000)
        cy.get(':nth-child(5) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(5) > .tru-layout-Section').scrollIntoView({force:true});
        cy.get(':nth-child(3) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(1) > input').check({force:true})
        cy.wait(5000)
        cy.get(':nth-child(2) > .tru-form-item > .tru-column > .tru-number-input').clear({force:true});
        cy.get(':nth-child(2) > .tru-form-item > .tru-column > .tru-number-input').type('12',{force:true});
        cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-number-input').clear({force:true});
        cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-number-input').type('120',{force:true});
        cy.get(':nth-child(5) > .tru-layout-Section > :nth-child(2) > :nth-child(3) > .tru-form-item').click({force:true});
        /* ==== End Cypress Studio ==== */
        cy.get(':nth-child(6) > div > .tru-button').click({force:true});
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.tru-layout-quote-actions > .primary > span').click({force:true});
        cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-date-picker > .react-datepicker-wrapper > .react-datepicker__input-container > input').click({force:true});
        cy.get('.react-datepicker__day--003').click({force:true});
        cy.get('.purchase-controls > .primary > span').click({force:true});
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)
        cy.wait(8000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.email').click({force:true});
        /* ==== End Cypress Studio ==== */
    })
   

   
 
})
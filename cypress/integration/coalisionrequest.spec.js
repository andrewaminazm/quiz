/// <reference types ="cypress" />

describe('regression trumarket', function(){
    it('new request  ', function(){
     cy.log('creat a new request for old client ')
     cy.log('1-login 2-add a new reqeust 3- fill pop-over menu and click continue  4- fill coalasion application field 5- click get quote ')
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
     cy.get('.multi-values > :nth-child(1) > .tru-button').click();
     cy.get('.multi-values > :nth-child(1) > .tru-button').click();
     cy.get('.multi-values > :nth-child(2) > .tru-button').click();
     cy.get('.multi-values > :nth-child(2) > .tru-button > :nth-child(1) > span').click();

     cy.wait(8000)
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

     cy.wait(5000)

     cy.get(':nth-child(9) > .tru-form-item > .tru-column > .tru-text-input').click({force:true}).type('www.malloftanta.com',{force:true});

     cy.wait(5000)
     cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').scrollIntoView()
     cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').clear({force:true});
     cy.get(':nth-child(10) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').type('1,000,000',{force:true});


     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('ADMITTED',{force:true});
     cy.get(':nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-column > .tru-text-input').clear({force:true});
     cy.get(':nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-column > .tru-text-input').type('2',{force:true});
     cy.get(':nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-column > .tru-text-input').clear({force:true});
     cy.get(':nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-column > .tru-text-input').type('23',{force:true});
     cy.get('.ant-select-selection-item').click({force:true});
     cy.get('.rc-virtual-list-scrollbar-thumb').click({force:true});
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > span').click({force:true});
     cy.get(':nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(4) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('1-25',{force:true});
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(4) > .tru-form-item').click({force:true});
     cy.get(':nth-child(5) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').clear({force:true});
     cy.get(':nth-child(5) > .tru-form-item > .tru-column > .tru-currency-input > .tru-text-input').type('400,000',{force:true});
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(5) > .tru-form-item').click({force:true});
     cy.get(':nth-child(4) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(1) > input').check({force:true});
     cy.get(':nth-child(4) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('Less than $10,000',{force:true});
     cy.get(':nth-child(4) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
     cy.get('.tru-textarea').click({force:true}).type('ee',{force:true});
     cy.get(':nth-child(2) > .tru-layout-Section > :nth-child(2) > .control-wrapper > .tru-form-item').click({force:true});

     cy.get(':nth-child(5) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(4) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('25000',{force:true});
     cy.get(':nth-child(2) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('500',{force:true});
     cy.get('.tru-column > .tru-single-select-arrow-wrapper > .tru-select').select('essential',{force:true});
     cy.get('.ant-select-selection-item').click({force:true});
     cy.wait(6000)
     cy.get('#rc_select_2').clear({force:true});
     cy.wait(6000)
     cy.get('#rc_select_2').type('bank{enter}',{force:true});
     cy.wait(6000)
     cy.get(':nth-child(6) > div > .tru-button').click({force:true});
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */

     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */

     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('[cy="7"]').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.get('.dropdown-actions > .tru-dropdown-menu > .animate__animated > :nth-child(2)').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.get('.tru-layout-quote-actions > .primary > span').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-date-picker-new > .ant-picker > .ant-picker-input > input').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.get('.ant-picker-cell-today > .ant-picker-cell-inner').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.get('.purchase-controls > .primary > span').click({force:true});
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     cy.wait(6000)
     /* ==== End Cypress Studio ==== */
    })
   

   
 
})
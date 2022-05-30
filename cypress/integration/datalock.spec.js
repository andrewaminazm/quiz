/// <reference types ="cypress" />

describe('clientsearch', function(){
    it('TR0002 - search for client', function(){
     cy.truflalogins()

     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */

     /* ==== End Cypress Studio ==== */

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
     cy.get('.multi-values > :nth-child(2) > .tru-button').click();
     cy.get('.multi-values > :nth-child(2) > .tru-button > :nth-child(1) > span').click();
     cy.get('.multi-values > :nth-child(2) > .tru-button').click();
     cy.get('.multi-values > :nth-child(2) > .tru-button > :nth-child(1) > span').click();

     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item').click();
     cy.wait(9000)
     cy.get('.location-search-input').clear();
     cy.wait(9000)
     cy.get('.location-search-input').type('123',{force:true});
     cy.get('.autocomplete-dropdown-container > :nth-child(1) > span').click({force:true});
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2)').click({force:true});
     cy.get(':nth-child(8) > .tru-form-item > .tru-column > .tru-text-input').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(8) > .tru-form-item > .tru-column > .tru-text-input').clear({force:true});
     cy.get(':nth-child(8) > .tru-form-item > .tru-column > .tru-text-input').type('www.google.com',{force:true});
     cy.get('.tru-currency-input > .tru-text-input').clear({force:true});
     cy.get('.tru-currency-input > .tru-text-input').type('10,000,000',{force:true});
     cy.get(':nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(8)').click({force:true});

     cy.wait(5000)
     cy.get('.ant-select-selection-item').click({force:true});
     cy.wait(5000)
     cy.get('#rc_select_0').clear({force:true});
     cy.get('#rc_select_0').type('agri{enter}',{force:true});

     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(2) > .tru-layout-Section > :nth-child(2)').click({force:true});
     cy.wait(5000)
     cy.get('div > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > span').click({force:true})
     cy.wait(5000)

     cy.get(':nth-child(2) > .tru-layout-Section > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(2) > input').check({force:true});
     cy.wait(5000)
     cy.get(':nth-child(2) > .tru-layout-Section > :nth-child(2) > :nth-child(5) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(2) > input').check({force:true});
     cy.wait(5000)
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(2) > .tru-layout-Section > :nth-child(2) > :nth-child(4)').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(4) > .tru-form-item > .tru-column > .tru-radio-select > :nth-child(1) > input').check({force:true});

     cy.wait(5000)
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(1) > .tru-form-item').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(5) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('30 Days',{force:true});
     cy.wait(5000)
     cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(5) > .tru-form-item').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(7) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('Less than 5000',{force:true});
     cy.wait(5000)

     cy.get(':nth-child(3) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(4) > .tru-form-item').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(1) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('100000',{force:true});
     cy.wait(5000)
     cy.get(':nth-child(2) > .tru-form-item > .tru-column > :nth-child(1) > .tru-single-select-arrow-wrapper > .tru-select').select('500',{force:true});
     cy.wait(5000)
     cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(2) > .tru-layout-Section > :nth-child(2)').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-single-select-arrow-wrapper > .tru-select').select('25000',{force:true});

     cy.wait(5000)

     cy.get(':nth-child(5) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(2) > .tru-layout-Section > :nth-child(2) > :nth-child(4) > .tru-form-item').click({force:true});
     cy.wait(5000)
     cy.get(':nth-child(7) > .tru-form-item > .tru-column > .tru-single-select-arrow-wrapper > .tru-select').select('0',{force:true});
     cy.wait(5000)
     cy.get(':nth-child(2) > .tru-layout-Section > :nth-child(2) > :nth-child(7) > .tru-form-item').click({force:true});
     cy.wait(5000)
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
     cy.get('.tru-layout-quote-actions > .primary > span').click({force:true});
     cy.get('.purchase-controls > .primary > span').click({force:true});
     cy.wait(8000)
     cy.wait(8000)
     cy.get('.active').click({force:true});
     cy.wait(8000)

     cy.get(':nth-child(2) > .sort-arrows').click({force:true});
     cy.get(':nth-child(2) > .sort-arrows').click({force:true});
     cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force:true});
     cy.get(':nth-child(5) > .sort-arrows > .tru-icon').click({force:true});

     cy.wait(8000)
     cy.get(':nth-child(2) > :nth-child(1) > span > a').click();

     cy.wait(8000)
     cy.get(':nth-child(1) > :nth-child(2) > .tru-layout-vertical-sections > .content > :nth-child(1) > .tru-layout-Section > :nth-child(2) > :nth-child(2) > .tru-form-item').click({force:true});
     cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-inner').click({force:true});
     cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input').check({force:true});
     cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-inner').click({force:true});
     cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').check({force:true});
     cy.get('.tru-layout-vertical-steps > :nth-child(6) > div > :nth-child(1) > span').click({force:true});
     cy.wait(8000)
     cy.wait(8000)
     cy.get(':nth-child(3) > :nth-child(1) > span > a').click();
     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */


     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.wait(8000)
     cy.get('.tru-layout-quote-actions > .primary > span').click({force:true});
     cy.get(':nth-child(4) > .tru-form-item > .tru-column > .tru-date-picker-new > .ant-picker > .ant-picker-input > input').click({force:true});
     cy.get('.ant-picker-cell-today > .ant-picker-cell-inner').click({force:true});
     cy.get('.purchase-controls > .primary > span').click({force:true});
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     cy.get('.tru-layout-quote-actions > .primary > span').click({force:true});
     cy.wait(8000)
     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.active').click();
     cy.wait(8000)
     cy.wait(8000)
     cy.get(':nth-child(2) > :nth-child(1) > span > a').click();
     cy.wait(8000)
     cy.wait(8000)
     cy.get('.tru-layout-quote-actions > .tru-button > span').click();
     cy.wait(8000)
     cy.wait(8000)
     cy.get('.active').click();
     cy.wait(8000)
     cy.wait(8000)
     cy.get(':nth-child(4) > :nth-child(1) > span > a').click();
     cy.wait(8000)
     cy.wait(8000)
     cy.get('[cy="7"]').click({force:true});
     cy.wait(8000)
     cy.get('.dropdown-actions > .tru-dropdown-menu > .animate__animated > .tru-button').click({force:true});
     cy.wait(8000)
     cy.get('.quote-actions > div > .primary > span').click({force:true});
     cy.wait(8000)
     cy.wait(8000)
     cy.wait(8000)
     /* ==== End Cypress Studio ==== */
    })
    
         // we are trying to return something
         // from the .within callback,
         
     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     

})


   
 
   
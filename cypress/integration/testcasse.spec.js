/// <reference types ="cypress" />
const emails = ['andrw@gmail', 'andres@gmail','ansed@gmail','anerw@gmail','weqer@gmail'];

describe('quiz', function(){
    emails.forEach(emails => {
    it(' case1', function(){
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url); //passing url value to cy.visit()

       
        cy.get('.contact-label > span').click();
        cy.get('#cf-1').clear();
        cy.get('#cf-1').type('andrewamin');
        cy.get('#cf-3').clear();
        cy.get('#cf-3').type('01211782855');
        cy.get('#cf-4').clear();
        cy.get('#cf-4').type(emails);
        cy.get('#cf-5').click().type('aaaaaaaaaaaaaaaaaaaaaaa');

       
        cy.get('#cf-2').clear();
        cy.get('#cf-2').type('wwwwwww');
        cy.get('p > .wpcf7-form-control').click();

        cy.wait(7000)
        cy.get('#cf-2').scrollIntoView()
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip').should('be.visible')
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip') .invoke('text').then((text) => {
            expect(text.trim()).equal('The e-mail address entered is invalid.')

    })

})




})
it(' case2', function(){
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url); //passing url value to cy.visit()








    /* ==== Generated with Cypress Studio ==== */
    cy.get('#menu-main-nav-1 > .menu-item-887 > .main-link').click({ force: true});
    cy.wait(8000)
    cy.url().should('eq', 'https://www.musala.com/company/')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url ')
              })

    cy.get('.company-members').should('be.visible')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check leadership ')
              })


    
    cy.get('#wt-cli-accept-all-btn').click();
    cy.get('[href="https://www.facebook.com/MusalaSoft?fref=ts"]')
    .then($el => {
       expect($el).to.have.attr('target','_blank')
       // update attr to open in same tab
       $el.attr('target', '_self')
    })
    .click()
    cy.wait(8000)
    cy.get('.gh1tjcio > .oajrlxb2 > .owycx6da').click({ force: true })
    cy.wait(8000)
    cy.get('.tr9rh885 > .j83agx80 > :nth-child(1) > .d2edcug0 > .gmql0nx0').should(($div) => {
        expect($div.text().trim()).equal("Musala Soft");
        cy.log(' verify text of musala soft')
      });

      cy.get('.b3onmgus > .oajrlxb2 > .q9uorilb > .pzggbiyp > g > image').should('be.visible')
      .then(() => {
                  // we are trying to return something
                  // from the .within callback,
                  // but it won't have any effect
                  cy.log(' verify image')
                })
      
   
   
})

it.skip(' case3', function(){
  const fileName = 'SampleFile.pdf';
  let url = Cypress.config().baseUrl; //accesing baseUrl
  cy.visit(url); //passing url value to cy.visit()










  /* ==== Generated with Cypress Studio ==== */
  cy.get('#menu-main-nav-1 > .menu-item-478 > .main-link').click({ force: true});
  cy.wait(8000)
  cy.get('.contact-label > span').click({ force: true});
  cy.url().should('eq', 'https://www.musala.com/careers/join-us/')
  .then(() => {
              // we are trying to return something
              // from the .within callback,
              // but it won't have any effect
            cy.log('check url ')
            })

  
  cy.get('#get_location').select('Anywhere');
  cy.get(':nth-child(2) > .card-container > .card-jobsHot__link > .card > .back > img').click({ force: true});
  cy.get(':nth-child(1) > .pull-right').should('be.visible')
  .then(() => {
              // we are trying to return something
              // from the .within callback,
              // but it won't have any effect
            cy.log('verify general description ')
            })

  cy.get(':nth-child(1) > .pull-left').should('be.visible')
  .then(() => {
              // we are trying to return something
              // from the .within callback,
              // but it won't have any effect
            cy.log('verify requirment ')
            })
  cy.get(':nth-child(2) > .pull-right').should('be.visible')
  .then(() => {
              // we are trying to return something
              // from the .within callback,
              // but it won't have any effect
            cy.log('verify responsabilities ')
            })
  cy.get(':nth-child(2) > .pull-left').should('be.visible')
  .then(() => {
              // we are trying to return something
              // from the .within callback,
              // but it won't have any effect
            cy.log('verify what we offer ')
            })


  cy.get('.fancybox > .wpcf7-form-control').click({ force: true});
  cy.wait(8000)
  cy.get('#wpcf7-f880-o1 > .wpcf7-form > .uploadCV > .wpcf7-form-control-wrap > #uploadtextfield').attachFile(fileName, { subjectType: 'drag-n-drop' });

  cy.get('#cf-2').clear({ force: true});
  cy.get('#cf-2').type('wwwwwww',{force: true});
  cy.get('#cf-5').clear({ force: true});
  cy.get('#cf-5').type('wwwww',{force: true});
  cy.get('#adConsentChx').check({ force: true});



  cy.get('p > .wpcf7-form-control').click({ force: true});
  cy.wait(8000)
  cy.get('.close-form').click({ force: true});
  cy.xpath('//*[@id="wpcf7-f880-o1"]/form/p[3]/span/span').invoke('text').then((text) => {
    expect(text.trim()).equal('The e-mail address entered is invalid.')
      cy.log('verify email error') 
})
  
})
     
it.skip(' case4', function(){
  let url = Cypress.config().baseUrl; //accesing baseUrl
  cy.visit(url); //passing url value to cy.visit()













  
  cy.get('#menu-main-nav-1 > .menu-item-478 > .main-link').click({ force: true});

  
  cy.get('.contact-label > span').click({ force: true});
  cy.get('#get_location').select('Sofia').then(() => {
    // we are trying to return something
    // from the .within callback,
    // but it won't have any effect
  cy.log('jobs in sofia ')
  cy.get(':nth-child(1) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/professional-services-specialist/')
    console.log('moreinfo:https://www.musala.com/job/professional-services-specialist/')
  })
  cy.get(':nth-child(11) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/english-teacher/')
    console.log('moreinfo:https://www.musala.com/job/english-teacher/')
  })
  cy.get(':nth-child(12) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/event-management-associate/')
    console.log('moreinfo:https://www.musala.com/job/event-management-associate/')
  })

  cy.get(':nth-child(13) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/accounting-assistant/')
    console.log('moreinfo:https://www.musala.com/job/accounting-assistant/')
  })
  cy.get(':nth-child(14) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/legal-compliance-assistant/')
    console.log('moreinfo:https://www.musala.com/job/legal-compliance-assistant/')

  })

  cy.get(':nth-child(16) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('moreinfo:https://www.musala.com/job/people-development-lead/')
    console.log('moreinfo:https://www.musala.com/job/people-development-lead/')

  })


  })
  cy.get('#get_location').select('Skopje').then(() => {
    // we are trying to return something
    // from the .within callback,
    // but it won't have any effect
  cy.log('jobs in skopje ')
  cy.get(':nth-child(1) > .card-container > .card-jobsHot__link > .card > .front > .card-jobsHot__title').invoke('text').then((text) => {
    cy.log(text)
    console.log(text)
    cy.log('https://www.musala.com/job/senior-java-developer/')
    console.log('https://www.musala.com/job/senior-java-developer/')
  })

})

 
})
    
    

})
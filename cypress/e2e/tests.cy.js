import { mainPage } from "../locators/mainPage.js"



describe('QA Tasks', () => {
  it.skip('checks the swapi for Darth Vader name in people/4', () => {
    cy.request('GET', 'https://swapi.dev/api/people/4/').then(
      (response) => {
        expect(response.body).to.have.property('name', 'Darth Vader');
      }
    )
  });

  beforeEach(() => {
    cy.visit('https://10clouds.com/');
  })

    it.skip('checks /careers for one QA entry', () => {
    cy.get(mainPage.careersBtn).should('be.visible').click({force: true});
    cy.url().should('eq', 'https://10clouds.com/careers/');
    cy.get(mainPage.careersPageHeader).should('be.visible');
    cy.get(mainPage.jobTitle).contains('QA Automation Engineer').should('have.length', 1);
  });

  it('checks /careers departments dropdown for qa', () => {
    cy.get(mainPage.careersBtn).should('be.visible').click({force: true});
    cy.url().should('eq', 'https://10clouds.com/careers/');
    cy.wait(2000);
    cy.get(mainPage.careersPageHeader).scrollIntoView();
    cy.get(mainPage.jobDepartmentDDbtns).contains('All departments').scrollIntoView();
    cy.get(mainPage.jobDepartmentDDbtns).contains('All departments').should('be.visible').click({force:true});
    cy.wait(100);
    cy.get(mainPage.jobDepartmentDDselect).contains('QA').should('be.visible').click();
    cy.get(mainPage.jobTitle).each((item) => {
      cy.wrap(item).as('text');
      if (cy.get('@text') == ("QA Manual") || ("QA Automation"))
      { cy.log("The position has the right name")};
      
    });
  });
});
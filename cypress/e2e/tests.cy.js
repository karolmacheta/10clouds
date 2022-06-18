import { mainPage } from "../locators/mainPage.js"

describe('QA Tasks', () => {
    it('checks /careers for one QA entry', () => {
    cy.visit('https://10clouds.com/');
    cy.get(mainPage.careersBtn).should('be.visible').click({force: true});
    cy.url().should('eq', 'https://10clouds.com/careers/');
    cy.get(mainPage.careersPageHeader).should('be.visible');
    cy.get(mainPage.jobTitle).contains('QA Automation Engineer').should('have.length', 1);
  });

  it('checks the swapi for Darth Vader name in people/4', () => {
    cy.request('GET', 'https://swapi.dev/api/people/4/').then(
      (response) => {
        expect(response.body).to.have.property('name', 'Darth Vader');
      }
    )
  });
});
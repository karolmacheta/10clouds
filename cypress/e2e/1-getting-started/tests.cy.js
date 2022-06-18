describe('QA Tasks', () => {
  beforeEach(() => {
    cy.visit('https://10clouds.com/')
  });

  it('checks careers for one QA entry', () => {
    cy.get('.navigation [href="/careers/"] span').click();
    cy.get('.job-offer__title').contains('QA Automation Engineer').should('have.length', 1)
  });

  it('checks the swapi for Darth Vader name in people/4', () => {
    cy.request('GET', 'https://swapi.dev/api/people/4/').then(
      (response) => {
        expect(response.body).to.have.property('name', 'Darth Vader') // true
      }
    )
  });

});
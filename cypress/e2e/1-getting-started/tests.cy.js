describe('QA Tasks', () => {
  beforeEach(() => {
    
  });

  it('checks careers for one QA entry', () => {
    cy.visit('https://10clouds.com/');
    cy.get('.nav-link-container [href="/careers/"] span').click(); 
    // cy.get('.nav-link-container span').contains('Careers').click();
    cy.url().should('eq', 'https://10clouds.com/careers/');
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
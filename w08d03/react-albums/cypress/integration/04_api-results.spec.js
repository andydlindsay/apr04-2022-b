it('can display results from an api call', () => {
  // visit the app
  cy.visit('/');

  // tell Cypress to provide our fake data instead
  cy.intercept('GET', '**/search*', { fixture: 'itunes' })
    .as('loadData');

  // get the input field and type in 'Daft Punk'
  cy.get('.search__form')
    .find('input')
    .type('Daft Punk');

  // try and find the spinner and assert that it is visible
  cy.get('.spinner')
    .should('be.visible');

  // wait for the search/api request to resolve
  cy.wait('@loadData');

  // pick out a daft album and assert that it is visible
  cy.get('article.album')
    .contains('Human After All')
    .should('be.visible');

  // uncheck the Explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // find the albums and assert that the explicit album isn't there
  cy.get('article.album')
    .should('not.contain', 'Daft Club');
});

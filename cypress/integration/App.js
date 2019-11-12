describe('App', () => {
  it('check if the app is loading the different links', () => {
    cy.visit('http://localhost:3000');
    cy.get('p').contains('Home');

    cy
      .get('a')
      .contains('Page 2')
      .click();

    cy
      .get('a')
      .contains('Github')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://github.com/mackbrowne/react-bootstrap-webpack-starter'
      );

    cy.location('pathname').should('eq', '/page2');
  });
});

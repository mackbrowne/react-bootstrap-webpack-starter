describe('App', () => {
  it('check if the app is loading the different links', () => {
    cy.visit('http://localhost:3000');
    cy.get('a.navbar-brand').contains('Flickr Photo Viewer');

    cy.get('a')
      .contains('Github')
      .should('have.attr', 'target', '_blank')
      .should(
        'have.attr',
        'href',
        'https://github.com/mackbrowne/react-bootstrap-webpack-starter/tree/interview-cygni'
      );

    cy.get('img.photo').should('have.length', 10);

    cy.scrollTo('bottom');

    cy.get('img.photo').should('have.length', 20);

    cy.wait(500);
    cy.scrollTo('bottom');

    cy.get('img.photo').should('have.length', 30);

    cy.wait(500);
    cy.scrollTo('bottom');

    cy.get('img.photo').should('have.length', 30);
    cy.get('footer').should('be.visible');
  });
});

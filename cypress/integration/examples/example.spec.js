/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Test', () => {
    cy.percySnapshot()
    cy.get('body').snapshot();
  })
})

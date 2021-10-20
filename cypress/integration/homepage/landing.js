/// <reference types="cypress" />

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Renders Correctly', () => {
    // Check if Logo Exists
    cy.get('.sc-eCImPb > img').click();
    // Check Features
    cy.get('[href="/features"]').click();
    // Check About
    cy.get('[href="/about"]').click();
  })

})

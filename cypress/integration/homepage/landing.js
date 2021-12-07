/// <reference types="cypress" />

describe('Landing Page', () => {

  it('Renders Correctly', () => {
    cy.visit('/')
    cy.get('[href="/features"]').click();
    cy.get('[href="/about"]').click();

  })
})

describe('Pre-Registration', () => {
    it('Class Selection', () => {
      cy.visit('/register')
    })
})



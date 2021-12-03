/// <reference types="cypress" />

describe('Landing Page', () => {

  it('Renders Correctly', () => {
    cy.visit('/')
    cy.get('[href="/features"]').click();
    cy.get('[href="/about"]').click();

  })
})

describe('Scheduler', () => {
    it('Class Selection', () => {
      cy.visit('/register')
      cy.get('body').click();
      cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').should('be.visible');
      cy.get(':nth-child(4) > .MuiInputBase-root > .MuiSelect-root').should('be.visible');
    })
})

context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is in home', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('home page')
      .should('exist')
  })

  it('basic nav', () => {
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')
  })
})

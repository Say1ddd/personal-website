context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should in home page', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Home Page')
      .should('exist')
  })

  it('should in about page', () => {
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')

    cy.contains('About Page')
      .should('exist')
  })
})

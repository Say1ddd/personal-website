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
    cy.get('#about')
      .click()

    cy.url()
      .should('eq', 'http://localhost:3333/about')
  })
})

context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('home page')
      .should('exist')

    cy.get('#about')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')
  })
})

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
})

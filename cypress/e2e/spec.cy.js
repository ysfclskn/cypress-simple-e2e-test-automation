describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fakes@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fakes@email.com')

    cy.get('#password1').type('12345')

    cy.get('#fullName1').type('Yusuf')

    cy.get('#description').type('Test')

    cy.get('.action-form > .btn').click()

    cy.get('.well > p').should('text','Your form has been submitted!')
  })
})
describe('test', function() {
  it('add man', function() {
    cy.visit('http://server:9000')

    cy.get('#add-input').clear().type('testman')
    cy.get('#dispersia-input').clear().type('123')
    cy.get('#add').click()
    cy.get('#add-input').clear()
    cy.get('#dispersia-input').clear()
    cy.get('#fack').find('input').eq(5).should('have.value', 'testman')
  })
})
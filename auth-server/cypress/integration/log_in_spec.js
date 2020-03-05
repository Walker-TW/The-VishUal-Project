describe('Log_in', function () {
  it('.should() - should allow user to sign in via spotify', function () {
    cy.visit('http://localhost:3000');
    cy.get('.test_btn').click();
    cy.get('.btn-primary').click();
    cy.get('.np-pristine').click();

    cy.get('div').should('contain', 'Now Playing')
  })
});
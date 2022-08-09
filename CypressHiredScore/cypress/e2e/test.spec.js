describe('empty spec', function () {
    it('Go to crunchbase.com', function () {
      cy.visit('https://www.crunchbase.com/');
    });
it('Click Advanced button> Go to People>Click “current organization”>Type “Hiredscore”>Choose first option> click on Athena Karp', () => {
    cy.get('#mat-input-0').click()
cy.get('a[href*="discover/people"]').click()
cy.get('#mat-input-1').type('HiredScore')
cy.get('mat-option').first().click()
cy.select('grid-row').contains('Athena Karp').click()
cy.url().should('eq', 'https://www.crunchbase.com/person/athena-karp')

});    

})
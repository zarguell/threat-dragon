describe('logout', () => {
    beforeEach(() => {
        cy.setupTest();
        cy.get('#local-login-btn').click();
        cy.contains('Logged in as Guest');
        cy.get('#nav-sign-out').click();
    });

    it('does not show the logged in text', () => {
        cy.get('.logged-in-as').should('not.be','visible');
    });

    it('should redirect to the home page', () => {
        cy.url().should('not.contain', '/dashboard');
    });
});

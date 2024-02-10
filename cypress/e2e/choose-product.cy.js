describe('Choose Products with n Test Cases', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('[Positive] Navigate to product page', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('#ui-id-4 > :nth-child(2)').should('be.visible').click()
            cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').should('be.visible').click()
            cy.get('.base').contains('Hoodies & Sweatshirts')
        })
    })

    it('[Positive] Search and select product', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
        })
    })
})
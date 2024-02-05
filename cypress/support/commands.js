Cypress.Commands.add('signup', (firstName, lastName, emailAddress, password, passwordConfirmation) => {
    cy.get('a').contains('Create an Account').click()
    cy.get('#firstname').should('be.visible').type(firstName)
    cy.get('#lastname').should('be.visible').type(lastName)
    cy.scrollTo('bottom')
    cy.get('#email_address').should('be.visible').type(emailAddress)
    cy.get('#password').should('be.visible').type(password)
    cy.get('#password-confirmation').should('be.visible').type(passwordConfirmation)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').should('be.visible').click()
})
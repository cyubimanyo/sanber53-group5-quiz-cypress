import pomSignup from "../support/pom/pomSignup"

describe('Sign Up with 9 Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('[Positive] Sign up with Email and Password filled', () => {
    cy.get('a').contains('Create an Account').click()

    // Generate random data string to sign up
    const firstName = pomSignup.generateRandomFirstName(8);
    const lastName = pomSignup.generateRandomLastName(8);
    const emailAddress = lastName + '@mailnesia.com';
    const password = pomSignup.generateRandomPassword(20);
    const passwordConfirmation = password;

    cy.get('#firstname').should('be.visible').type(firstName)
    cy.get('#lastname').should('be.visible').type(lastName)
    cy.scrollTo('bottom')
    cy.get('#email_address').should('be.visible').type(emailAddress)
    cy.get('#password').should('be.visible').type(password)
    cy.get('#password-confirmation').should('be.visible').type(passwordConfirmation)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').should('be.visible').click()
    cy.get('.message-success').should('be.visible')
    cy.log('Thank you for registering with Main Website Store.')
  })

  it('[Negative] Sign up with First Name blank', () => {
    cy.readFile('cypress/fixtures/withoutFirstName.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#firstname-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Last Name blank', () => {
    cy.readFile('cypress/fixtures/withoutLastName.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#lastname-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Email blank', () => {
    cy.readFile('cypress/fixtures/withoutEmail.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#email_address-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Password blank', () => {
    cy.readFile('cypress/fixtures/withoutPassword.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#password-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Password Confirmation blank', () => {
    cy.readFile('cypress/fixtures/withoutPasswordConfirmation.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#password-confirmation-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Confirm Password not matched', () => {
    cy.readFile('cypress/fixtures/withoutPasswordConfirmation.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#password-confirmation-error').should('be.visible')
      cy.log('This is a required field.')
    })
  })

  it('[Negative] Sign up with Confirm Password not matched', () => {
    cy.readFile('cypress/fixtures/unmatchedPassword.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('#password-confirmation-error').should('be.visible')
      cy.log('Please enter the same value again.')
    })
  })

  it('[Negative] Sign up with existing account', () => {
    cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
      cy.signup(account.firstName, account.lastName, account.emailAddress, account.password, account.passwordConfirmation)
      cy.get('.message-error').should('be.visible')
      cy.log('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
  })
})
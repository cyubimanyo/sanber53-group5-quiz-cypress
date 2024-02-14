import pomSearch from "../support/pom/pomSearch"

describe('Choose Products with 7 Test Cases', () => {
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
            cy.get('.logo > img').should('be.visible').click()
            cy.search('jacket')
            pomSearch.productFound()
        })
    })

    it('[Negative] Search No Product Found', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('.logo > img').should('be.visible').click()
            cy.search('xxxxxx')
            pomSearch.productNotFound()
        })
    })

    it('[Positive] Search with Valid Minimum Character', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('.logo > img').should('be.visible').click()
            cy.search('hoo')
            pomSearch.productFound()
        })
    })

    it('[Negative] Search with Invalid Minimum Character', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('.logo > img').should('be.visible').click()
            cy.search('h')
            pomSearch.invalidCharacter()
        })
    })

    it('[Positive] View product details', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('.logo > img').should('be.visible').click()
            cy.search('shirt')
            cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').should('be.visible').click()
            pomSearch.viewProductDetails()
        })
    })

    it('[Positive] Add product to cart from category', () => {
        cy.readFile('cypress/fixtures/existingAccount.json').then((account) => {
            cy.login(account.emailAddress, account.password)
            cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
            cy.get('#ui-id-5').should('be.visible').click()
            cy.scrollTo('bottom')
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').should('be.visible').click()
            cy.get('#option-label-size-143-item-166').should('be.visible').click()
            cy.get('#option-label-color-93-item-52').should('be.visible').click()
            cy.addToCart('1')
            cy.scrollTo(0, -1000)
            cy.get('.message-success').should('be.visible').click()
            cy.log('You added Argus All-Weather Tank to your shopping cart.')
        })
    }) 
})
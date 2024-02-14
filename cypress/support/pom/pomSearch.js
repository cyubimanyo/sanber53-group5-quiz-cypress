class pomSearch {
    productFound(){
        cy.get('.wrapper > .products').should('be.visible')
        cy.get(':nth-child(1) > #toolbar-amount > :nth-child(3)').should('be.visible')
    }

    productNotFound(){
        cy.get('.column > .message').should('be.visible')
        cy.contains('Your search returned no results.')
    }

    invalidCharacter(){
        cy.get('.column > .message').should('be.visible')
        cy.contains('Minimum Search query length is 3')
    }

    viewProductDetails(){
        cy.get('.product-info-main').should('be.visible')
    }
}

export default new pomSearch()
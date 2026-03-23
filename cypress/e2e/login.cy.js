describe('Orange HRM Tests', () => {

  it.skip('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.location('pathname', { timeout: 10000 })
      .should('equal', '/web/index.php/dashboard/index')

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
      .contains('Dashboard')
  })

  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('Test')
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-alert')
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })

})
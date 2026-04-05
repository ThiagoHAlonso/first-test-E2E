import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
  }

  it.only('User Info Update - success', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton)
    
    //cy.visit('/pim/viewPersonalDetails/empNumber/7')
  })
  it('Login - fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')
  })

})

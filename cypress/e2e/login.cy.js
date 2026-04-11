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
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton:"[type='submit']"
  }

  it.only('User Info Update - success', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton)
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorList.fistNameField).type('FirstNameTest')
    cy.get(selectorList.lastNameField).type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('NicknameTest') 
    cy.get(selectorList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest') 
    cy.get(selectorList.genericField).eq(6).clear().type('Drivers License Number Test')
    cy.get(selectorList.genericField).eq(7).clear().type('2026-07-07')
    cy.get(selectorList.dateCloseButton).click() 
    cy.get(selectorList.genericField).eq(8).clear().type('ssnNumberTest')  
    cy.get(selectorList.genericField).eq(9).clear().type('sinNumberTest') 
    cy.get(selectorList.dateCloseButton).eq(0).click()
    cy.get('body').should('contain','Succesfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')
  })

})

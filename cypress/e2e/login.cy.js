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
    midNameField:"[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    calendarFieldButton:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    dateCloseButton:".--close",
    submitButton:"[type='submit']",
    nationalitiesBarButton:':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    nationalityButton: ":nth-child(167)"
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
    cy.get(selectorList.fistNameField).clear().type('FirstNameTest')
    cy.get(selectorList.midNameField).clear().type('MidNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('NickTest') 
    cy.get(selectorList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest') 
    cy.get(selectorList.genericField).eq(6).clear().type('Drivers License Number Test')
   
    cy.get(selectorList.calendarFieldButton).clear().type('2012-12-12')
   
    cy.get(selectorList.dateCloseButton).click()
   
    cy.get(selectorList.nationalitiesBarButton).click()
    cy.get(selectorList.nationalityButton).click()
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()


  
    // cy.get(selectorList.submitButton).eq(0).click({force:true})
    
  

    //cy.get(selectorList.dateCloseButton).eq(0).click()
    //cy.get('body').should('contain','Succesfully Updated')
   // cy.get('.oxd-toast-close')
  
  })
  it('Login - fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')
  })

})
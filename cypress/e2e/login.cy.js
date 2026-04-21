import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button[type='submit']",
    wrongCredentialAlert: "[role='alert']",

    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",

    nicknameField: ".oxd-input--active", // vamos usar com cuidado
    dateField: "[placeholder='yyyy-dd-mm']",

    submitButton: "button[type='submit']",
    toastMessage: ".oxd-toast-content",
    toastClose: ".oxd-toast-close"
  }

  it.only('User Info Update - success', () => {

    cy.visit('/auth/login')

    // login
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()

    cy.location('pathname').should('include', '/dashboard')

    // navegação
    cy.visit('/web/index.php/pim/viewPersonalDetails/empNumber/7')

    // nome
    cy.get(selectorList.firstNameField)
      .clear()
      .type('FirstNameTest')

    cy.get(selectorList.lastNameField)
      .clear()
      .type('LastNameTest')

    // ⚠️ ainda usando eq, mas com contexto controlado
    cy.get(selectorList.nicknameField).eq(3)
      .clear()
      .type('NicknameTest')

    cy.get(selectorList.nicknameField).eq(4)
      .clear()
      .type('Employee')

    cy.get(selectorList.nicknameField).eq(5)
      .clear()
      .type('OtherIdTest')

    cy.get(selectorList.nicknameField).eq(6)
      .clear()
      .type('Drivers License Number Test')

    // ✅ CORREÇÃO DO DATEPICKER
    cy.get(selectorList.dateField).click()

    // opção mais estável: escolher a data no calendário
    cy.contains('.oxd-calendar-date', '10').click()

    // outros campos
    cy.get(selectorList.nicknameField).eq(8)
      .clear()
      .type('ssnNumberTest')

    cy.get(selectorList.nicknameField).eq(9)
      .clear()
      .type('sinNumberTest')

    // salvar (pega o botão correto)
    cy.get(selectorList.submitButton).first().click()

    // validação
    cy.get(selectorList.toastMessage)
      .should('be.visible')
      .and('contain', 'Successfully Updated')

    cy.get(selectorList.toastClose).click()
  })


  it('Login - fail', () => {

    cy.visit('/auth/login')

    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()

    cy.get(selectorList.wrongCredentialAlert)
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })

})
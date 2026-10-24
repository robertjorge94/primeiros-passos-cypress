import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'



const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()

      
     // fistNameField: "[name='firstName']",
      //lastNameField: "[name='lastName']",
      //genericField: ".oxd-input--active",
      //dateField: "[placeholder='yyyy-dd-mm']",
      //submitButton: "[type='submit']"


describe('Orange HRM', () => {

  it.only('User Info Updates- Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboard.checkDashboardPage()

    // cy.get(selectorsList.fistNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('122')
    // cy.get(selectorsList.genericField).eq(4).clear().type('BX')
    // cy.get(selectorsList.genericField).eq(5).clear().type('12250236')
    // cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    // cy.get(selectorsList.submitButton).eq(0).click()
  })

  it('Login sem sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})
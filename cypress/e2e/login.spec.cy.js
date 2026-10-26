import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'



const loginPage = new LoginPage()
const dashboard = new DashboardPage()


      
     


describe('Orange HRM', () => {

  it('Login sem sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

      })


  it('Login com sucesso', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  dashboard.checkDashboardPage()

      })


})
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/MyInfoPage'


const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

      
     // fistNameField: "[name='firstName']",
      //lastNameField: "[name='lastName']",
      //genericField: ".oxd-input--active",
      //dateField: "[placeholder='yyyy-dd-mm']",
      //submitButton: "[type='submit']"


describe('Orange HRM', () => {

  it('User Info Updates- Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboard.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('firstname', 'lastname')
    myInfoPage.fillEmployeeDetails('employeeID', 'otherID', '2025-07-09', '2027-07-09')
    //myInfoPage.fillStatus()
    myInfoPage.saveForm()


    
  })

  
})
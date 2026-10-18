const selectorsList= {
userNameField: "[name='username']", 
passwordField: "[name='password']",
loginButton: ".oxd-button", 
sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text" , 
wrongCredentialAlert: ".oxd-alert"

}





describe('Orange HRM', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
})

it('Login sem sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Teste')
    cy.get(selectorsList.passwordField).type('teste')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      genericCombobox: ".oxd-select-text--arrow" ,
      secondItemCombobox: '.oxd-select-dropdown > :nth-child(2)' ,
      thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)' ,
      dateCloseButton: ".--close",
      submitButton: "[type='submit']"


    }

    return selectors
  }

fillPersonalDetails(firstname, lastname){
cy.get(this.selectorsList().firstNameField).clear().type(firstname)
cy.get(this.selectorsList().lastNameField).clear().type(lastname)


}
   
fillEmployeeDetails(employeeID, otherID, driversLicenseDate, licenseExpiry){
cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiry)

}

//fillStatus(){
//cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
//cy.get(this.selectorsList().secondItemCombobox).eq(2).click({force: true})
//cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
//cy.get(this.selectorsList().thirdItemCombobox).eq(3).click({force: true})
//cy.get(this.selectors().dateCloseButton).click({force: true})
//Não consegui fazer essa função clicar nos botões, escolher uma opção
//}

saveForm(){
cy.get(this.selectorsList().submitButton).eq(0).click({force: true})

}

}
export default  MyInfoPage
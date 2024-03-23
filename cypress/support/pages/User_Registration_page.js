/// <reference types = "Cypress" />
import { ELEMENTS as el } from "../elementsMapping/User_Registration_elements";
require("cypress-xpath");

class UserRegistrationPage {
  acessCreateUser() {
    cy.get(el.btnCreateUser).click();
  }

  viewPaeRegistration(){
    cy.contains('h1', 'Register').should('be.visible');
  }

  viewMessageMandatoryFirstName(){
    cy.contains(el.messageMandatoryFirstName, 'First name is required.').should('be.visible');
  }

  viewMessageMandatoryLastName(){
    cy.contains(el.messageMandatoryLastName, 'Last name is required.').should('be.visible');
  }

  viewMessageMandatoryEmail(){
    cy.contains(el.messageMandatoryEmail, 'Email is required.').should('be.visible');
  }

  viewMessageMandatoryPassword(){
    cy.contains(el.messageMandatoryPassword, 'Password is required.').should('be.visible');
  }

  viewMessageMandatoryConfirmPassword(){
    cy.contains(el.messageMandatoryConfirmPassword, 'Password is required.').should('be.visible');
  }

  viewMessageSucess(){
    cy.contains(el.messageSucess, 'Your registration completed').should('be.visible');
  }

  click_Btn_Register(){
    cy.get(el.btnRegister).click();

  }

  sucessRegister() {
    cy.get(el.male).click();
    //cy.get(el.women).click();
    cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    cy.get(el.lastNameUser).type("Oliveira"); 
    cy.get(el.dateOfBirthDay).select('18')
    cy.get(el.dateOfBirthMonth).select('2')
    cy.get(el.dateOfBirthYear).select('1993')
    cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    cy.get(el.userPassword).type("Teste123");
    cy.get(el.confirmPassword).type("Teste123");
    cy.get(el.btnRegister).click();
  
  }

  missingFirstName(){
    //cy.get('svg').find('id-of-svg-element')
    //cy.get(el.male).click();
    //cy.get(el.women).click();
    //cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    //cy.get(el.lastNameUser).type("Oliveira");
    //cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    //cy.get(el.userPassword).type("Teste123");
    //cy.get(el.confirmPassword).type("Teste123");
    //cy.get(el.dateOfBirthDay).select('18')
    //cy.get(el.dateOfBirthMonth).select('2')
    //cy.get(el.dateOfBirthYear).select('3')
   
  }

  LastnameMissing(){
    //cy.get('svg').find('id-of-svg-element')
    //cy.get(el.male).click();
    //cy.get(el.women).click();
    //cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    //cy.get(el.lastNameUser).type("Oliveira");
    //cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    //cy.get(el.userPassword).type("Teste123");
    //cy.get(el.confirmPassword).type("Teste123");
    //cy.get(el.dateOfBirthDay).select('18')
    //cy.get(el.dateOfBirthMonth).select('2')
    //cy.get(el.dateOfBirthYear).select('3')
   
  }

  missingEmailAddress(){
    //cy.get('svg').find('id-of-svg-element')
    //cy.get(el.male).click();
    //cy.get(el.women).click();
    //cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    //cy.get(el.lastNameUser).type("Oliveira");
    //cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    //cy.get(el.userPassword).type("Teste123");
    //cy.get(el.confirmPassword).type("Teste123");
    //cy.get(el.dateOfBirthDay).select('18')
    //cy.get(el.dateOfBirthMonth).select('2')
    //cy.get(el.dateOfBirthYear).select('3')
   
  }

  missingPassword(){
    //cy.get('svg').find('id-of-svg-element')
    //cy.get(el.male).click();
    //cy.get(el.women).click();
    //cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    //cy.get(el.lastNameUser).type("Oliveira");
    //cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    //cy.get(el.userPassword).type("Teste123");
    //cy.get(el.confirmPassword).type("Teste123");
    //cy.get(el.dateOfBirthDay).select('18')
    //cy.get(el.dateOfBirthMonth).select('2')
    //cy.get(el.dateOfBirthYear).select('3')
   
  }

  missingPasswordConfirmation(){
    //cy.get('svg').find('id-of-svg-element')
    //cy.get(el.male).click();
    //cy.get(el.women).click();
    //cy.get(el.firstNameUser).type("Aparecido Ferreira de ");
    //cy.get(el.lastNameUser).type("Oliveira");
    //cy.get(el.userEmail).type("aparecidooliveira@teste.com");
    //cy.get(el.userPassword).type("Teste123");
    //cy.get(el.confirmPassword).type("Teste123");
    //cy.get(el.dateOfBirthDay).select('18')
    //cy.get(el.dateOfBirthMonth).select('2')
    //cy.get(el.dateOfBirthYear).select('3')
   
  }


}
export default new UserRegistrationPage();

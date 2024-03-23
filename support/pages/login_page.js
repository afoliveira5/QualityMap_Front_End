/// <reference types = "Cypress" />
import { ELEMENTS as el } from "../elementsMapping/login_elements";
import "cypress-iframe";

class LoginPage {
  accessLoginPage() {
    cy.visit("/");
  }

  entreValidCredentials() {
    cy.get(el.btnLogin).click();
    cy.get(el.username).type("aparecido.oliveira@teste.com");
    cy.get(el.Password).type("Brasil.894");
    cy.get(el.btnStartSession).click();

  }

  errorMessage(){
   cy.contains('.message-error', 'Login was unsuccessful. Please correct the errors and try again.No customer account found').should('be.visible');
    // cy.contains('.message-error', 'Login successful.').should('be.visible');

  }
 
  
}
export default new LoginPage();

/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login_page";
import UserRegistrationPage from "../pages/User_Registration_page";
import 'cypress-iframe';

require("cypress-xpath");


Given ("I accessed the applications", () => {
  loginPage.accessLoginPage();
 
});

When  ("access the registration screen", () => {
  cy.wait(500);
  UserRegistrationPage.acessCreateUser();

});

Then ("I see the registration screen", () => {
  UserRegistrationPage.viewPaeRegistration();

});


Given ("I am on the registration screen", () => {
  loginPage.accessLoginPage();
  cy.wait(500);
  UserRegistrationPage.acessCreateUser();

});

When ("to create a user", () => {
  UserRegistrationPage.sucessRegister();
  
});

Then ("I see message sucess", () => {
  UserRegistrationPage.viewMessageSucess() 

});

Given("I am on the user registration screen", ()=>{ 
  loginPage.accessLoginPage();
  cy.wait(500);
  UserRegistrationPage.acessCreateUser();
  UserRegistrationPage.viewPaeRegistration();

});

When  ("click to create an unnamed user", ()=>{ 
  UserRegistrationPage.click_Btn_Register();


});

Then  ("I see the mandatory message", ()=>{ 
  UserRegistrationPage.viewMessageMandatoryFirstName();
  UserRegistrationPage.viewMessageMandatoryLastName();
  UserRegistrationPage.viewMessageMandatoryEmail();
  UserRegistrationPage.viewMessageMandatoryPassword();
  UserRegistrationPage.viewMessageMandatoryConfirmPassword();


})
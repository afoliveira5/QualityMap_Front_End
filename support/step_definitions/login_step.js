/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login_page";

Given("I accessed the application", () => {
 loginPage.accessLoginPage();

});

When("trying to access the application without registering", () => {
  loginPage.entreValidCredentials();

});

Then ("I see the error message",()=>{
loginPage.errorMessage();

});

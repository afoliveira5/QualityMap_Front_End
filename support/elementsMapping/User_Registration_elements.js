/// <reference types="cypress" />
require('cypress-xpath')

export const ELEMENTS={
    btnCreateUser:'.ico-register',
    viewPageRegistration:'h1',
    male:'.male',
    women: '.female',
    firstNameUser:'#FirstName', 
    lastNameUser:'#LastName',
    dateOfBirthDay:'[name="DateOfBirthDay"]',
    dateOfBirthMonth:'[name="DateOfBirthMonth"]',
    dateOfBirthYear: '[name="DateOfBirthYear"]',
    userEmail: '#Email',
    company: '#Company',
    Newsletter: '#Newsletter',
    userPassword: '#Password',
    confirmPassword: '#ConfirmPassword',
    btnRegister: '#register-button',
    messageMandatoryFirstName: '#FirstName-error',
    messageMandatoryLastName: '#LastName-error',
    messageMandatoryEmail: '#Email-error',
    messageMandatoryPassword: '#Password-error',
    messageMandatoryConfirmPassword: '#ConfirmPassword-error',  
    messageSucess: '.result',  

}
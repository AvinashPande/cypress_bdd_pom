import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

import loginPage from "../../../pages/login/login_page";

 Given('I am on the login page',() =>{
   //cy.log("hi")
   loginPage.openURL();
    
 })

When('enter username {string} with Password {string}', (username,password) =>{

    loginPage.enterUserName(username);
    loginPage.enterPassword(password);
   
})

And('I click on the login button', () =>{
     loginPage.clickLoginButton();


}) 
Then('shoould be redirect to dashboard page',()=>{
    cy.log("login sucessfully")
    
}) 
Then('I should see error message {string}', (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage)
})

And('I should remain on the login page', () => {
    cy.url().should('include', 'v1')
    // cy.verifyURL('v1/index.html')
})

When('I enter username {string}', (username) => {
   // loginPage.enterUsername(username)
   loginPage.enterUserName(username)

})
And('I enter password {string}', (password) => {
    //loginPage.enterPassword(password)
    loginPage.enterPassword(password)
})

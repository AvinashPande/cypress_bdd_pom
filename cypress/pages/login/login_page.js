class LoginPage {

    selector = {

        UserNameInput: "#user-name",
        UserPasswordInput: "#password",
        LoginButton: "#login-button",
        errorMessage: '[data-test="error"]'

    }

    openURL() {

        return cy.visit("https://www.saucedemo.com/v1/")
    };
    enterUserName(username) {

        cy.typeText(this.selector.UserNameInput, username)
        return this;
       

    };
    enterPassword(password) {
        cy.typeText(this.selector.UserPasswordInput, password)
        return this;

    };

    clickLoginButton() {

        cy.clickElement(this.selector.LoginButton);

    };

    login(){
        this.enterUserName();
        this.enterPassword();
        this.clickLoginButton()
        return;
        
    }
    verifyPageVisible() {
        cy.log(" *** Login Successful *** ")
        cy.verifyURL('/inventory.html')
    }

    verifyErrorMessage(expectedMessage) {
        cy.verifyElementVisible(this.selector.errorMessage)
        cy.verifyElementContainsText(this.selector.errorMessage, expectedMessage)
    }

}
export default new LoginPage();
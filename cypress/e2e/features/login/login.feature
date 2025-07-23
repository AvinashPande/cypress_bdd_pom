Feature: user Auth -login
As a user i want to login into system

Background:
    Given I am on the login page

Scenario: sussess full login with standerd user
    When  enter username "standard_user" with Password "secret_sauce"
    And   I click on the login button 
    Then  shoould be redirect to dashboard page

Scenario: Failed login with locked_out_user
     When enter username "locked_out_user" with Password "secret_sauce"
     And I click on the login button
     Then I should see error message "Epic sadface: Sorry, this user has been locked out."
    And I should remain on the login page

Scenario: Failed login with invalid_user
     When enter username "invalid_user" with Password "wrong"
     And I click on the login button
     Then I should see error message "Epic sadface: Username and password do not match any user in this service"
     And I should remain on the login page

Scenario Outline: Login Form Validation
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should see error message "<error_message>"

    Examples:
    |username|password|error_message|
    | | secret_sauce | Epic sadface: Username is required|
    |standard_user| | Epic sadface: Password is required|
    | | | Epic sadface: Username is required|
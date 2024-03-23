Feature: User_Registration


Scenario: Access the user registration screen
Given I accessed the applications
When  access the registration screen
Then I see the registration screen


Scenario: Register successfully
Given I am on the registration screen
When to create a user
Then I see message sucess


Scenario: don't register a user without a name
Given I am on the user registration screen
When  click to create an unnamed user
Then  I see the mandatory message

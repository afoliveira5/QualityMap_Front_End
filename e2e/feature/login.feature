Feature: login

@smoke
Scenario: Don't log in with email without registering
Given I accessed the application
When trying to access the application without registering
Then I see the error message

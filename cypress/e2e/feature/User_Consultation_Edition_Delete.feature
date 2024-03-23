Feature: User_Consultation_Edition_Delete

Scenario: view registered users screen
Given that I accessed the system through the domain of the company I wish to use for resale
When accessing the settings menu
And Access user
Then I see the registered users screen

Scenario: Validate the message before deleting the user
Given that I am on the registered user screen
When to delete a user
Then I see the message Are you sure you want to delete this user? This action cannot be undone.
And the options to cancel or delete user
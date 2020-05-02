Feature: Deal data creation
Scenario: Free CRM Create a new deal scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
|heardm|123heard|
Then user clicks on login button
Then user is on home page
Then user moves to new deal page
Then user enters deal details
|test deal| 1000|50|10|
Then close the browser
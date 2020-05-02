Feature: Free CRM Login Feature

##without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "heardm" and "123heard"
#Then user clicks on login button
#Then user is on home page
#Then close the browser


#with Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser


Examples:
| username| password|
| heardm | 123heard|
| tom  | peter|
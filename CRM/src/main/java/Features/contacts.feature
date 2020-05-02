Feature: Free CRM Login Feature

#without Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "heardm" and "123heard"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters "<firstname>" and "<lastname>" and "<position>"
Then close the browser


Examples:
| username| password|firstname|lastname|position|
| heardm | 123heard|ram|prasad|Manager|
| heardm | 123heard|hari|prasad|Director|



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "##without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"heardm\" and \"123heard\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "heardm",
        "123heard"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "peter"
      ],
      "line": 28,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6196939,
  "status": "passed"
});
formatter.before({
  "duration": 436433,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"heardm\" and \"123heard\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 18323602604,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 17524669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "heardm",
      "offset": 13
    },
    {
      "val": "123heard",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 316117441,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 12520701275,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 9720791,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 1285511086,
  "status": "passed"
});
formatter.after({
  "duration": 118746,
  "status": "passed"
});
formatter.after({
  "duration": 101783,
  "status": "passed"
});
formatter.before({
  "duration": 944320,
  "status": "passed"
});
formatter.before({
  "duration": 149076,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom\" and \"peter\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8575238972,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 26630135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "peter",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 227254197,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3729308107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 19087397,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 986185785,
  "status": "passed"
});
formatter.after({
  "duration": 77622,
  "status": "passed"
});
formatter.after({
  "duration": 66313,
  "status": "passed"
});
});
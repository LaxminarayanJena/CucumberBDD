Feature: User Login Feature

  Scenario: User Login scenario
    Given User is at the login page of the application
    When User login with the following username and password
      | username      | password      |
      | UserNameOne   | PasswordOne   |
      | UserNameTwo   | PasswordTwo   |
      | UserNameThree | PasswordThree |
      | UserNameFour  | PasswordFour  |
    When User login with the following username password and Address
      | username      | password      | address      |
      | UserNameOne   | PasswordOne   | AddressOne   |
      | UserNameTwo   | PasswordTwo   | AddressTwo   |
      | UserNameThree | PasswordThree | AddressThree |
      | UserNameFour  | PasswordFour  | AddressFour  |
    Then User should be able to login with correct username and password
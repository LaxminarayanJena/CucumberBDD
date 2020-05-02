Feature: Post feature of facebook
       This will test the post functionality at the user wall

Background: Common Step
  Given User should be logged in
  And should be present in its own wall

 Scenario: Post a text on user wall
  When I type the text as "This is sample post" in the text box
  And click on post button
  Then the message should get posted
  
  Scenario: Post a video on user wall
  When User supply the youtube link "google" in the text box
  And click on post button
  Then Video should get posted on the user wall
  And the video should have proper thumbnail
Feature: Post feature of facebook
       This will test the post functionality at the user wall

 Scenario: Post a text on user wall
  Given User should be logged in
  And should be present in its own wall
  When I type the text in the text box
  And click on post button
  Then the message should get posted
  
  Scenario: Post a video on user wall
  Given User should be logged in
  And should be present in its own wall
  When User supply the youtube link in the text box
  And click on post button
  Then Video should get posted on the user wall
  And the video should have proper thumbnail
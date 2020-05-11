# CucumberBDD
sample project to demonstrate how to work with Selenium and cucumber for Java

### Pico Container
instead of creating object of LoginPage class in LoginSteps class

LoginPage loginPage = new LoginPage();

use pico container dependency Injection
```
public LoginSteps(LoginPage loginPage)
{   
}
```

### Screenshot
```
@After
public void tearDown(Scenario scenario)
       {
if (scenario.isFailed())
{
   try {
    byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
    File screenshot_with_scenario_name = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(screenshot_with_scenario_name,new File("./target/test-report/" + scenario.getName() + ".png"));
    System.out.println(scenario.getName());
    scenario.embed(screenshot, "image/png");
       } 
   catch (WebDriverException somePlatformsDontSupportScreenshots) {
    System.err.println(somePlatformsDontSupportScreenshots.getMessage());
 }     
         }
```

# CucumberBDD
sample project to demonstrate how to work with Selenium and cucumber for Java </br>
Latestversion-1.2.6  info.cukes nov 2019

### run from command line
mvn test -Dcucumber.filter.tags="@smoke"

### Pico Container
instead of creating object of LoginPage class in LoginSteps class

LoginPage loginPage = new LoginPage();

use pico container dependency Injection
```
public LoginSteps(LoginPage loginPage)
{   
}
```
### Cucumber Options
```
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\Features\\taggedhooks.feature", //the path of the feature files
		glue={"stepDefinations"} ,//the path of the step definition files
		format= {"pretty","html:test-outout" ,"json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
		monochrome=true,//display the console output in a proper readable format
		strict = true, //it will check if any step is not defined in step definition file
		dryRun = false ,//to check the mapping is proper between feature file and step def file
		tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		)
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
### Run one step multiple times in a scenario
```
@Then("^user enters username and password$")
public void user_enters_username_and_password(DataTable credentials) throws Throwable {
	for(Map<String, String> data :credentials.asMaps(String.class, String.class))
	{
		System.out.println(data.get("username"));
		System.out.println(data.get("password"));
	}
	
}

Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario
Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| username| password|
| heardm | 123heard|
| tom  | peter|
Then user clicks on login button
```

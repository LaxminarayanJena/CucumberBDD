package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features={"src/main/java/features/Login.feature"},
		glue = {"stepdefination","hooks"},
		monochrome = true,
		strict = true
		)

public class PostTestNgRunner extends AbstractTestNGCucumberTests {

}

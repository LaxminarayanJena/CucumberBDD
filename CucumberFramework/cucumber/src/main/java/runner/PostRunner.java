package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/main/java/features/Login.feature"},
		glue = {"stepdefination"},
		monochrome = true,
		strict = true
		
		
		)
public class PostRunner {

}

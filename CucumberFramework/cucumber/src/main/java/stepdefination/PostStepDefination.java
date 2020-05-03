package stepdefination;

import org.junit.runner.RunWith;

import base.BaseClass;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import transform.TransformData;



@RunWith(Cucumber.class)
public class PostStepDefination {

	/*pico container
	 * To create a reference variable in the dependent class
	 * To intialise the reference variable via constructor
	 *  
	 */
	
	private BaseClass baseClass;
	
	public PostStepDefination(BaseClass baseClass)
	{
		this.baseClass=baseClass;
	}
	
  
	@Given("User should be logged in")
	public void user_should_be_logged_in() {
	    System.out.println("User should be logged in");
	    System.out.println(baseClass.getFeatureName());
	    System.out.println(baseClass.getScenarioName());
	}

	@When("^I type the text as \"([^\"]*)\" in the text box$")
    public void i_type_the_text_as_something_in_the_text_box(String strArg1) throws Throwable {
        System.out.println(strArg1);
       
    }

	 @When("^User supply the youtube link \"([^\"]*)\" in the text box$")
	    public void user_supply_the_youtube_link_something_in_the_text_box(@Transform(TransformData.class)String strArg1) throws Throwable {
		 System.out.println(strArg1);
	    }

    @Then("^the message should get posted$")
    public void the_message_should_get_posted() throws Throwable {
    	System.out.println("the message should get posted");
    }

    @Then("^Video should get posted on the user wall$")
    public void video_should_get_posted_on_the_user_wall() throws Throwable {
    	System.out.println("Video should get posted on the user wal");
    }

    @And("^should be present in its own wall$")
    public void should_be_present_in_its_own_wall() throws Throwable {
    	System.out.println("should be present in its own wall");
    }

    @And("^click on post button$")
    public void click_on_post_button() throws Throwable {
    	System.out.println("click on post button");
    }

    @And("^the video should have proper thumbnail$")
    public void the_video_should_have_proper_thumbnail() throws Throwable {
    	System.out.println("the video should have proper thumbnail");
    }

}
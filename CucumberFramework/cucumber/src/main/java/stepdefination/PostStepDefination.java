package stepdefination;

import org.junit.runner.RunWith;

import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class PostStepDefination {

  
	@Given("User should be logged in")
	public void user_should_be_logged_in() {
	    System.out.println("User should be logged in");
	}

    @When("^I type the text in the text box$")
    public void i_type_the_text_in_the_text_box() throws Throwable {
        System.out.println("I type the text in the text box");
    }

    @When("^User supply the youtube link in the text box$")
    public void user_supply_the_youtube_link_in_the_text_box() throws Throwable {
    	System.out.println("User supply the youtube link in the text box");
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
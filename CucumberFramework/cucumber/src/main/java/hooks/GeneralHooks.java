package hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class GeneralHooks {
	
	@Before
	public void setup(Scenario name)
	{
		System.out.println("before hook");
		System.out.println(name.getName());
		System.out.println(name.getStatus());
	}
	
	@After
	public void tearDown()
	{
		System.out.println("after hook");
	}

}

//mention hooks in runner
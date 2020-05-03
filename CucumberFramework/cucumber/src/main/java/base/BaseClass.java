package base;

public class BaseClass {
	
	private String featureName;
	private String scenarioName;
	
	//get getters
	public String getFeatureName() {
		return featureName;
	}
	public String getScenarioName() {
		return scenarioName;
	}
	
	public BaseClass()
	{
		featureName="BDD";
		scenarioName="DI";
	}
	

}

package Test;
import org.testng.annotations.Test;
import reusablePackage.AllActions;
public class Login {
AllActions actionObject = new AllActions();
@Test
public void run() throws InterruptedException
{	
actionObject.sendKeys("//input[@name='zee-login-password-two']","test.lead");
// actionObject.openBrowser("Chrome", "http://13.228.56.78/flex/html5");	
// actionObject.sendKeys("//input[@name='zee-login-username-two']","test.lead");
}
}
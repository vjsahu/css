package reusablePackage;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Reusable {
	public static WebDriver driver;

	   public void openBrowser(String browserName, String URL) {
		   if(browserName.equals("Chrome"))
		   {
		   System.out.println("Launching Google browser");
		   System.setProperty("webdriver.chrome.driver", ".\\WebDrivers\\chromedriver.exe");   
		   ChromeOptions options = new ChromeOptions();
		   options.addArguments("disable-infobars");
		   ChromeOptions option = new ChromeOptions();
	       option.addArguments("disable-infobars");
		   driver = new ChromeDriver(option);
		   driver.manage().window().maximize();
		   driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		   driver.get(URL);  
		   }
		   else
		   {
		   System.out.println("Other Browser");  
		   }
	   }
	  
	  public void enterUserName(String userName,String userXpath)
	  {
		 driver.findElement(By.xpath(userXpath)).sendKeys(userName);

		//  driver.findElement(By.xpath(Xpath)).sendKeys(sendkeys);
		 
	  }
	  
	   public void enterPassword(String passWord,String pwdXpath)
	   {
		  WebElement name=driver.findElement(By.xpath(pwdXpath));
		  name.sendKeys(passWord);
		 
	   }
	  
	  public void clickButton() throws InterruptedException
	  {
		  driver.findElement(By.xpath("(//button[text()='Login'])[2]")).click();	
		  Thread.sleep(5000);
		  driver.quit();
	  }
	  
	  
	  
}

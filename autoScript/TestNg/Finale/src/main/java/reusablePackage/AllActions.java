package reusablePackage;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AllActions {
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
	  
	  public void sendKeys(String object,String input)
	  {
		 driver.findElement(By.xpath(object)).sendKeys(input);
 
		 
	  }
	  
	 
	  
	  public void click(String object) throws InterruptedException
	  {
		  
		  
		  
		  WebElement ele= driver.findElement(By.xpath(object));
		    WebDriverWait wait1 = new WebDriverWait(driver,60);
	        wait1.until(ExpectedConditions.elementToBeClickable(ele));
		    ele.click();
	  }
	  
	  
	  
}

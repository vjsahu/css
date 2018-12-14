
///////////////////////Common///////////////////

package com.appium;                                                                                                                                                                                         

// import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;


import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Appium {
	
public RemoteWebDriver driver;

  @Test
  public void run() {

	  
	  try
	  {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Abilash");
		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.UDID,"ZY3228SRS5");
		DesiredCapabilities.chrome();
		caps.setBrowserName("chrome"); 
	    caps.setPlatform(Platform.WINDOWS);
		caps.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		
		caps.setCapability(MobileCapabilityType.BROWSER_VERSION,"66.0.3359.158");
		caps.setCapability(MobileCapabilityType.NO_RESET, "false");
		caps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.chrome");    
		caps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");
		
	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),caps);
		driver.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);	
		
		driver.get("http://13.228.56.78/flex/html5/");
	  }
	  catch(Exception e)
	  {
		  e.printStackTrace();
	  }
		
	  
  }
}
///////////////////////Common///////////////////

package com.appium;                                                                                                                                                                                         

// import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;


import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Appium {
	
public RemoteWebDriver driver;

  @Test
  public void run() {

	  
	  try
	  {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Abilash");
		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.UDID,"ZY3228SRS5");
		DesiredCapabilities.chrome();
		caps.setBrowserName("chrome"); 
	    caps.setPlatform(Platform.WINDOWS);
		caps.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		
		caps.setCapability(MobileCapabilityType.BROWSER_VERSION,"66.0.3359.158");
		caps.setCapability(MobileCapabilityType.NO_RESET, "false");
		caps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.chrome");    
		caps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");
		
	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),caps);
		driver.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);	
		
		driver.get("http://13.228.56.78/flex/html5/");
	  }
	  catch(Exception e)
	  {
		  e.printStackTrace();
	  }
		
	  
  }
}
///////////////////////Common///////////////////

package com.appium;                                                                                                                                                                                         

// import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;


import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Appium {
	
public RemoteWebDriver driver;

  @Test
  public void run() {

	  
	  try
	  {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Abilash");
		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.UDID,"ZY3228SRS5");
		DesiredCapabilities.chrome();
		caps.setBrowserName("chrome"); 
	    caps.setPlatform(Platform.WINDOWS);
		caps.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		
		caps.setCapability(MobileCapabilityType.BROWSER_VERSION,"66.0.3359.158");
		caps.setCapability(MobileCapabilityType.NO_RESET, "false");
		caps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.chrome");    
		caps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");
		
	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),caps);
		driver.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);	
		
		driver.get("http://13.228.56.78/flex/html5/");
	  }
	  catch(Exception e)
	  {
		  e.printStackTrace();
	  }
		
	  
  }
}
///////////////////////Common///////////////////

package com.appium;                                                                                                                                                                                         

// import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;


import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Appium {
	
public RemoteWebDriver driver;

  @Test
  public void run() {

	  
	  try
	  {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Abilash");
		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.UDID,"ZY3228SRS5");
		DesiredCapabilities.chrome();
		caps.setBrowserName("chrome"); 
	    caps.setPlatform(Platform.WINDOWS);
		caps.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		
		caps.setCapability(MobileCapabilityType.BROWSER_VERSION,"66.0.3359.158");
		caps.setCapability(MobileCapabilityType.NO_RESET, "false");
		caps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.chrome");    
		caps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");
		
	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),caps);
		driver.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);	
		
		driver.get("http://13.228.56.78/flex/html5/");
	  }
	  catch(Exception e)
	  {
		  e.printStackTrace();
	  }
		
	  
  }
}
///////////////////////Common///////////////////

package com.appium;                                                                                                                                                                                         

// import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;


import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Appium {
	
public RemoteWebDriver driver;

  @Test
  public void run() {

	  
	  try
	  {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Abilash");
		caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		caps.setCapability(MobileCapabilityType.UDID,"ZY3228SRS5");
		DesiredCapabilities.chrome();
		caps.setBrowserName("chrome"); 
	    caps.setPlatform(Platform.WINDOWS);
		caps.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
		
		caps.setCapability(MobileCapabilityType.BROWSER_VERSION,"66.0.3359.158");
		caps.setCapability(MobileCapabilityType.NO_RESET, "false");
		caps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.android.chrome");    
		caps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "com.google.android.apps.chrome.Main");
		
	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),caps);
		driver.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);	
		
		driver.get("http://13.228.56.78/flex/html5/");
	  }
	  catch(Exception e)
	  {
		  e.printStackTrace();
	  }
		
	  
  }
}
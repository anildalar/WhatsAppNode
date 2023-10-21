const { remote } = require('webdriverio');

async function runTest() {
  const client = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      deviceName: 'emulator',
      appPackage: 'com.android.chrome',
      appActivity: 'com.google.android.apps.chrome.Main',
      automationName: 'UiAutomator2'
    }
  });

  await client.pause(5000);
  await client.url("https://wa.me/917697634314");
  await client.pause(2000);
  const element = await client.$('android=new UiSelector().resourceId("android:id/action-button")');
  await element.click();

  // Find and click on the chat element
  /* const chatElement = await client.$(
    '//android.widget.ImageButton[@content-desc="Next"]'
  );
  await chatElement.click();

  await client.pause(3000);

  const element = await client.$('android=new UiSelector().resourceId("android:id/button2")');
  await element.click();

  await client.pause(4000);

  const agrre = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/eula_accept")');
  await agrre.click();

  await client.pause(4000);

  const phoneNumber = '7999452711'; 
  const countryCode = '91'; 
  const cccode = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/registration_cc")`);
  await cccode.setValue(`${countryCode}`);
  
  await client.pause(1000);

  const ccnum = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/registration_phone")`);
  await ccnum.setValue(`${phoneNumber}`);
  
  await client.pause(1000);

  const next = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_submit")');
  await next.click(); */

  //await cccode.click();
  // Perform actions on the calculator app
  // ...

  //await client.deleteSession();
}

runTest();
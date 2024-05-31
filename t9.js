const { remote } = require('webdriverio');

async function runTest() {
  const client = await remote({
    capabilities: {
      alwaysMatch: {
        'appium:platformName': 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:app': '/path/to/your/app.apk',
      },
      firstMatch: [{}],
    },
    port: 4723, // Add this line to specify the Appium server port
  });

  // Perform some actions or assertions here

  await client.deleteSession();
}

runTest();

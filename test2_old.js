const { remote } = require('webdriverio');
const axios = require('axios');
const express = require('express');
const app = express();
var cors = require('cors');
const mysql = require('mysql');
var ip = require("ip");
var spawn = require('child_process').spawn;
const fs = require('fs');
const yaml = require('js-yaml');
const parsePhoneNumber = require('libphonenumber-js');

app.use(cors())
app.use(express.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ubuntu", 
  database: "appium_whatsapp_db"
});


con.connect(function(err) {
if (err) throw err
});

let port = 8000;
app.listen(port,()=>{
    console.log('The server listening on port ,',port);
});

app.get('/api/whatsapp/registration',async (req,res)=>{
    try {
      let cc = parsePhoneNumber(`+${req.query.number}`).countryCallingCode;
      let numb = parsePhoneNumber(`+${req.query.number}`).nationalNumber;
      let wa_number = req.query.number; //SELECT * FROM ppium_doc_reg_tbl  WHERE wa_no = 917697634314;
      con.query("SELECT * FROM appium_doc_reg_tbl WHERE wa_no = "+wa_number+"",async function (err2, result2)  {
        if(err2) throw err2
            if(result2 == ''){
              console.log('Number is not in Db');
              testit();
            }else{
                console.log("Number Is Exist ");
                res.status(500).json({ error: 'Number Is Exist , Please Try Different Number' });
            }
      });
      function testit(){
        con.query("SELECT * FROM appium_proxy_tbl WHERE appium_proxy_tbl.prox_id NOT IN (SELECT proxy_id FROM appium_doc_reg_tbl);",async function (err2, result2)  {
          if(err2) throw err2
              if(result2 != ''){
                  for(let element of result2){
                      console.log('proxy_ip ',element.proxy_ip);
                      var proip = element.proxy_ip;
                      var proport = element.proxy_port;
                      var proid = element.prox_id;
                      createCont(cc,numb,wa_number,proip,proport,proid);
                      return;
                  }
              }else{
                  console.log("Proxy Record Not Found");
                  res.status(500).json({ error: 'Proxy Records Not Available' });
              }
        });
        setTimeout(function(){
          res.status(200).json({
            message:'Registration Process Running ',
            data:req.query.number,
          });
        },6000);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
    
});

function createCont(cc,numb,wa_number,proip,proport,proid){
  con.query("SELECT * FROM appium_doc_reg_tbl ORDER BY ID DESC",function (err22, result22)  {
      if(err22) throw err22
      if(result22 == ''){
          let port1 = 6090;
          let port2 = 4790;
          let port3 = 5592;
          let port4 = 55592;
          var ipAddress = ip.address();
          var oldservice = 'nexus';
          con.query("INSERT INTO appium_doc_reg_tbl (doc_cont_id,wa_no,cont_status,is_wa_reg,proxy_id,ip,port_1,port_2,port_3,port_4) VALUES ('c"+numb+"','"+wa_number+"','running','pending','"+proid+"','"+ipAddress+"','"+port1+"','"+port2+"','"+port3+"','"+port4+"')",function(err,result) {
              if(err) throw err
          });
          createCont2(cc,numb,wa_number,proip,proport,proid,port1,port2,port3,port4,oldservice);
      }else{
          let port1 = parseInt(result22[0].port_1) + 1;
          let port2 = parseInt(result22[0].port_2) + 1;
          let port3 = parseInt(result22[0].port_3) + 1;
          let port4 = parseInt(result22[0].port_4) + 1;
          var ipAddress = ip.address();
          var oldservice = 'nexus'+result22[0].wa_no;
          con.query("INSERT INTO appium_doc_reg_tbl (doc_cont_id,wa_no,cont_status,is_wa_reg,proxy_id,ip,port_1,port_2,port_3,port_4) VALUES ('c"+numb+"','"+wa_number+"','running','pending','"+proid+"','"+ipAddress+"','"+port1+"','"+port2+"','"+port3+"','"+port4+"')",function(err,result) {
          if(err) throw err
          });
          createCont2(cc,numb,wa_number,proip,proport,proid,port1,port2,port3,port4,oldservice);
      }
  }); 
}
function createCont2(cc,numb,wa_number,proip,proport,proid,port1,port2,port3,port4,oldservice){
  var contname3 = 'c'+numb+''; 

  const composeFile = '/WhatsAppNode/docker-compose.yml';
  fs.readFile(composeFile, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${composeFile}: ${err}`);
      return;
    }
    try {
      const composeConfig = yaml.load(data);
      // Modify the service name
      const serviceName = 'nexus'+wa_number;
      const originalServiceName = oldservice;
      composeConfig.services[serviceName] = composeConfig.services[originalServiceName];
      delete composeConfig.services[originalServiceName];
      // Modify the container name
      composeConfig.services[serviceName].container_name = contname3;
      composeConfig.services[serviceName].ports = [port1+':'+6080,port2+':'+4723,port3+':'+5554,port4+':'+5555]; // Modify ports
      composeConfig.services[serviceName].environment = ['DEVICE=Nexus 5','CONNECT_TO_GRID=true','APPIUM=true','SELENIUM_HOST=selenium_hub','HTTPS_PROXY=http://'+proip+':'+proport+'']; // Modify ports
      // Write the modified YAML back to the file
      const updatedYaml = yaml.dump(composeConfig, { indent: 2 });
      fs.writeFileSync(composeFile, updatedYaml);
      console.log(`Service and container names updated successfully.`);
      setTimeout(function() {
        var CreateCont;
        CreateCont = spawn('docker-compose', ['up','-d']); 
        CreateCont.stdout.on('data', function (datastrat) {
            console.log('cont created ', datastrat);
        });
        CreateCont.stderr.on('data', function (datastrat) {   
            console.log('datastrat: ' + datastrat.toString());
        }); 
        CreateCont.on('exit', function (datastrat) {
            console.log('child process exited with code17 ' + datastrat.toString());
            setTimeout(function() { 
              console.log('timeout 10s');
              var movefile ;
              movefile = spawn('docker', ['cp','/wp.apk','c'+numb+':/']);
              movefile.stdout.on('data', function (data) {
                 console.log('data Move  Whatsapp' ,data);
              });
              movefile.stderr.on('data', function (data) {   
                //console.log('stderr: ' + data.toString());
              });
              movefile.on('exit', function (code) {
                  setTimeout(function () {
                      reinstallapk(contname3,wa_number,port2);
                      function reinstallapk(contname3,wa_number,port2){
                        var apkinstall;
                        apkinstall = spawn('docker', ['exec',contname3,'adb','install','/wp.apk']);
                        apkinstall.stdout.on('data', function (data3) {
                            var text2 = data3.toString();
                            console.log('instaling: ' + data3.toString());
                            if( text2.search(/Success/i) !== -1){
                                console.log('Success Installed: ' + data3.toString());
                                console.log('All data Here ',cc,numb,wa_number,proip,proport,proid,port1,port2,port3,port4 );
                                runTest(wa_number,port2);
                            }else{
                                console.log('not Installed APk');
                            }
                        });
                        apkinstall.stderr.on('data', function (data3) {
                            console.log('stderr: ' + data3.toString());
                        });
                        apkinstall.on('exit', function (code3) {
                            console.log('child IN installing APK ' + code3.toString());
                        });
                      }
    
                  },4000);
              });
            },20000);
        });
      },2000);
    } catch (err) {
      console.error(`Error modifying ${composeFile}: ${err}`);
    }
  });

}


//runTest(numbers,port1);
async function runTest(numbers,port2) {
  var nameprofile = 'Profile'+numbers;
  const client = await remote({
    path: '/wd/hub',
    port: port2,
    capabilities: {
      platformName: 'Android',
      deviceName: 'emulator',
      appPackage: 'com.whatsapp',
      appActivity: 'com.whatsapp.HomeActivity',
      automationName: 'UiAutomator2'
    }
  });

  

  await client.pause(5000);
  // Find and click on the chat element
  const chatElement = await client.$(
    '//android.widget.ImageButton[@content-desc="Next"]'
  );
  await chatElement.click();
  await client.pause(2000);
  let chatText = "";
  let targetText = "You have a custom ROM installed. Custom ROMs can cause problems with WhatsApp Messenger and are unsupported by our customer service team.";
  // Loop until the target text is matched
  while (chatText !== targetText) {
    const chatTextElement = await client.$('android=new UiSelector().resourceId("android:id/message")');
    chatText = await chatTextElement.getText();
    if (chatText === targetText) {
      console.log("Target text matched!");
      const element = await client.$('android=new UiSelector().resourceId("android:id/button2")');
      await element.click();
      break;
    }
    await client.pause(2000);
  }
  await client.pause(4000);
  const agrre = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/eula_accept")');
  await agrre.click();

  await client.pause(4000);
  
  var countryCode = parsePhoneNumber(`+${numbers}`).countryCallingCode;
  var phoneNumber = parsePhoneNumber(`+${numbers}`).nationalNumber;
  const cccode = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/registration_cc")`);
  await cccode.setValue(`${countryCode}`);
  await client.pause(1000);

  const ccnum = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/registration_phone")`);
  await ccnum.setValue(`${phoneNumber}`);
  
  await client.pause(1000);
  const next = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_submit")');
  await next.click();
  await client.pause(2000);
  let chatText2 = "";
  let targetText2 = "Edit";
  console.log('txtx ',targetText2);
  while (chatText2 !== targetText2) {
    const chatTextElement2 = await client.$('android=new UiSelector().resourceId("android:id/button3")');
    chatText2 = await chatTextElement2.isExisting();
    if (chatText2) {
      console.log("Target text matched!");
      const element = await client.$('android=new UiSelector().resourceId("android:id/button1")');
      await element.click();
      break;
    }
    await client.pause(5000);
  }

  await client.pause(5000);
  
  /// Otp API Call Here
  // this section is for register process in this coode 
  const timeout = 8 * 60 * 1000; // 10 minutes in milliseconds
  const timeout2 = 2 * 60 * 1000; // 2 minutes in milliseconds
  const startTime = Date.now(); 
  let optchat = "";
  let targetText22 = "You have";
  while (optchat !== targetText22) {
    const response = await axios.get('http://95.217.58.34/read.php?sender=Whatsapp&number='+countryCode+phoneNumber+'');
    if(response.data.search('code: ') == '-1'){
        console.log('dd',response.data);
        console.log('not found');
    }else{
        let OtpCode = response.data.split('code: ')[1].split(' ')[0].replace('-','');
        //let OtpCode = response.data[0].otp.split('code: ')[1].split(' ')[0];
        const otpenter = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/verify_sms_code_input")`);
        await otpenter.setValue(`${OtpCode}`);
        break;
    }
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime >= timeout2) {
      const tab1 = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/fallback_methods_entry_text")`);
      await tab1.click();
      await client.pause(4000);
      const tab2= await client.$(`android=new UiSelector().className("android.widget.Button").text("RESEND SMS")`);
      await tab2.click();
      await client.pause(1000);
    }  
    //com.whatsapp:id/fallback_methods_entry_text
    //class - 	android.widget.Button , text - RESEND SMS  // 500 1528

    if (elapsedTime >= timeout) {
      break; 
    }   
    await client.pause(2000);
  }
  await client.pause(2000);

  let chatText4 = "";
  let targetText4 = "To easily send messages and photos to friends and family, allow WhatsApp to access your contacts, photos and other media.";
  while (chatText4 !== targetText4) {
    const chatTextElement4 = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/permission_message")');
    chatText4 = await chatTextElement4.isExisting();
    if (chatText4) {
      console.log("Target text matched!");
      const permisson5 = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/submit")`);
      await permisson5.click();
      break;
    }
    await client.pause(5000);
  }
  await client.pause(2000);
  
  let chatText5 = "";
  let targetText5 = "ALLOW";
  while (chatText5 !== targetText5) {
    const chatTextElement5 = await client.$('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")');
    chatText5 = await chatTextElement5.isExisting();
    if (chatText5) {
      console.log("Target text matched!");
      const element5 = await client.$('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")');
      await element5.click();
      break;
    }
    await client.pause(5000);
  }

  await client.pause(5000);
  const element6 = await client.$('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")');
  await element6.click();
  await client.pause(2000);

  let chatText7 = "";
  let targetText7 = "If you previously backed up to Google Drive and want to restore it, give WhatsApp permission to check your Google account for backups.";
  while (chatText7 !== targetText7) {
    const chatTextElement7 = await client.$('android=new UiSelector().resourceId("android:id/message")');
    chatText7 = await chatTextElement7.isExisting();
    if (chatText7) {
      console.log("Target text matched!");
      const permisson7 = await client.$(`android=new UiSelector().resourceId("android:id/button2")`);
      await permisson7.click();
      break;
    }
    await client.pause(5000);
  }

  await client.pause(2000);

  let chatText8 = "";
  let targetText8 = "ALLOW";
  while (chatText8 !== targetText8) {
    const chatTextElement8 = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/register_name_accept")');
    chatText8 = await chatTextElement8.isExisting();
    if (chatText8) {
      console.log("Target text matched!");
      const profilename = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/registration_name")`);
      await profilename.setValue(`${nameprofile}`);
      break;
    }
    await client.pause(5000);
  }

  await client.pause(3000);
  const permisson9 = await client.$(`android=new UiSelector().resourceId("com.whatsapp:id/register_name_accept")`);
  await permisson9.click();
  //await client.deleteSession();
  console.log('Whatsapp Registration Done');
}

app.get('/api/whatsapp/sendMessage',async (req,res)=>{
    try {
      let cc = parsePhoneNumber(`+${req.query.number}`).countryCallingCode;
      let numb = parsePhoneNumber(`+${req.query.number}`).nationalNumber;
      let wa_number = req.query.number; //SELECT * FROM ppium_doc_reg_tbl  WHERE wa_no = 917697634314;
      let to = req.query.to;
      let messages = req.query.msg;
      console.log('to ',to);
      con.query("SELECT * FROM appium_doc_reg_tbl WHERE wa_no = "+wa_number+"",async function (err2, result2)  {
        if(err2) throw err2
            if(result2 == ''){
              console.log('Number is not in Db');
              res.status(500).json({ error: 'Number Is Not In DB' });
            }else{
                console.log("Number Is Exist ");
                var num = parseInt(result2[0].wa_no);
                var prt = parseInt(result2[0].port_2);
                var contNmn = result2[0].doc_cont_id;
                sendMessageApi(num,prt,contNmn,to,messages);
                res.status(200).json({ Data: result2 });
            }
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
});

async function sendMessageApi(numbers,port2,contname,to,msg){
  console.log('ddd ',numbers,port2);
  const client = await remote({
    path: '/wd/hub',
    port: port2,
    capabilities: {
      platformName: 'Android',
      deviceName: 'emulator',
      appPackage: 'com.whatsapp',
      appActivity: 'com.whatsapp.HomeActivity',
      automationName: 'UiAutomator2',
      noReset: true
    }
  });
  await client.pause(5000);
  openChat = spawn('docker', ['exec',contname,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+to+'&msg=MESSAGE"']); 
  await client.pause(6000);
  const message = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/entry")');
  await message.setValue(msg);
  await client.pause(3000);
  const click = await client.$('android=new UiSelector().resourceId("com.whatsapp:id/send")');
  await click.click();
  console.log('Message Sent SuccessFully');
  //spawn('adb', ['shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+numbers+'&msg=MESSAGE"']); 



}


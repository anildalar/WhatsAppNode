const { exec } = require('child_process');
const fs = require('fs');
const readline = require('readline');
const  mysql = require('mysql');
//Get the running container

var con = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "password",
  database: "testdb"
});

con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO doc_reg_tbl (doc_cont_id) VALUES ('"+dockerId+"')";
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
  });
});



//await new Promise(resolve => setTimeout(resolve, 5000));

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('proxy_http_auth.txt');

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//   let pno = 5901;
//   let pno2 = 2220;
//   for await (const line of rl) {
//         // Each line in input.txt will be successively available here as `line`.
//         console.log(`Line from file: ${line}`);
//         var num = line;
//         var ip = num.split(':')[0].replaceAll('.','_');
//         var port = num.split(':')[1];
//         let dockerId = 'c_'+ip+"__"+port;
//         console.log('Docker Container Id ',dockerId);
//          /* exec('docker run --privileged --device /dev/kvm -d -p '+pno+':5901 -p '+pno2+':22 -v $(pwd)/sdk:/opt/android-sdk -v "/root/WhatsAppNode":/root/WhatsAppNode --name '+dockerId+' thyrlian/android-sdk-vnc ', (error, stdout, stderr) => {
//             if (error) {
//               console.error(`error: ${error.message}`);
//               return;
//             }
//             if (stderr) {
//               console.error(`stderr: ${stderr}`);
//               return;
//             }
//             console.log(`stdout:\n${stdout}`);
//           }); */
//         /* con.connect(function(err) {
//           if (err) throw err;
//           console.log("Connected!");
//           //Insert a record in the "customers" table:
//           var sql = "INSERT INTO doc_reg_tbl (doc_cont_id) VALUES ('"+dockerId+"')";
//           con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//           });
//         }); */
//         /* con.connect(function(err) {
//           if (err) throw err;
//           con.query("SELECT * FROM doc_reg_tbl", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//           });
//         }); */

//           pno++;
//           pno2++;
//   }
// }
//processLineByLine();

//Step 1

/* exec('docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    //return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    //return;
  }
  console.log(`stdout:\n${stdout}`);
  
}); */
/* setTimeout(() =>{
  startScript();
},40000) */
/* exec('docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &', (error, stdout, stderr) => {
  console.log(`stdout:}`);
}); */
// exec('docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &', (error, stdout, stderr) => {
//   if (error) {
//     // Reject(error.message);
//      console.error(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     // Reject(stderr);
//      console.error(`stderr: ${stderr}`);
//      return;
//   }
//   setTimeout(() =>{
//     exec('docker exec lucid_ardinghelli adb -s emulator-5554 install /WhatsApp.apk', (error2, stdout2, stderr2) => {
//       if (error2) {
//         //Reject('2error.message');
//         console.error(`error: ${error2.message}`);
//         return;
//       }
//       if (stderr2) {
//         //Reject('2stderr');
//         console.error(`stderr: ${stderr2}`);
//         return;
//       }
//       setTimeout(() =>{
//         exec('docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -n com.whatsapp/com.whatsapp.Main', (error3, stdout3, stderr3) => {
//           if (error3) {
//             //Reject('2error.message');
//             console.error(`error: ${error3.message}`);
//             return;
//           }
//           if (stderr3) {
//             //Reject('2stderr');
//             console.error(`stderr: ${stderr3}`);
//             return;
//           }
//           setTimeout(() =>{
//             console.log(`stdout:\n${stdout3}`);
//           },6000);
//           //console.log(`stdout:\n${stdout}`);
//         });
//       },10000)
//       //console.log(`stdout:\n${stdout}`);
//     });
//   },40000)
  
// });

// let emuRun = new Promise(function(Resolve, Reject) {
//   /*exec('docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &');
//   Resolve('Step 1'); */
//   //let emuRun = ()=>{
//   // "Producing Code" (May take some time)
//   exec('docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &', (error, stdout, stderr) => {
//     if (error) {
//       // Reject(error.message);
//        console.error(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       // Reject(stderr);
//        console.error(`stderr: ${stderr}`);
//        return;
//     }
//     setTimeout(() =>{
//       Resolve(stdout);
//     },40000)
    
//   });
// }); 

// //Step 2
// let apkInstall = new Promise(function(Resolve, Reject) {
//   // "Producing Code" (May take some time)
//   /* exec('docker exec lucid_ardinghelli adb -s emulator-5554 install /WhatsApp.apk');
//   Resolve('Step 2'); */
//   exec('docker exec lucid_ardinghelli adb -s emulator-5554 install /WhatsApp.apk', (error, stdout, stderr) => {
//     if (error) {
//       //Reject('2error.message');
//       console.error(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       //Reject('2stderr');
//       console.error(`stderr: ${stderr}`);
//       return;
//     }
//     setTimeout(() =>{
//       Resolve(stdout);
//     },10000)
//     //console.log(`stdout:\n${stdout}`);
//   });
// });

// //Step 3

// let apkOpen = new Promise(function(Resolve, Reject) {
//  // exec('docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -n com.whatsapp/com.whatsapp.Main');
//   //Resolve('Step3');
//   exec('docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -n com.whatsapp/com.whatsapp.Main', (error, stdout, stderr) => {
//     if (error) {
//       //Reject('2error.message');
//       console.error(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       //Reject('2stderr');
//       console.error(`stderr: ${stderr}`);
//       return;
//     }
//     setTimeout(() =>{
//       Resolve(stdout);
//     },6000);
//     //console.log(`stdout:\n${stdout}`);
//   });
// });


//IIFE ()();

/* emuRun.then((data)=>{
  console.log(data);
  apkInstall.then((data2)=>{
    console.log(data2);
    apkOpen.then((data3)=>{
      console.log(data3);
    }).catch((error3)=>{
      console.log(error3);
    });
  }).catch((error2)=>{
    console.error(error2)
  });
}).catch((error)=>{
  console.log(error);
});
 */
/* function startScript(){
  apkInstall.then((data2)=>{
    console.log(data2);
    apkOpen.then((data3)=>{
      console.log(data3);
    }).catch((error3)=>{
      console.log(error3);
    });
  }).catch((error2)=>{
    console.error(error2)
  });
} */



  //await new Promise(resolve => setTimeout(resolve, 5000));

//PO.then().then().catch().finally()
// emuRun.then((d)=>{
//     //Success
//     console.log(`stdout:\n${d}`);
//     //PO.then().then().catch().finally()
//     apkInstall.then((dd)=>{
//       //Success
//       console.log(`stdout:\n${dd}`);
//     }).catch((ee)=>{
//         //Failaure
//       console.error(`stderr: ${ee}`);
//     });

// }).catch((e)=>{
//     //Failaure
//     console.error(`stderr: ${e}`);
// });


//PO.then().then().catch().finally()

/* async function processLineByLine2() {
  const fileStream = fs.createReadStream('command.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.



  for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        exec(''+line+'', (error, stdout, stderr) => {
          if (error) {
            console.error(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout:\n${stdout}`);
        });
        
  }
} */
//processLineByLine2();
  /* exec("docker ps --format '{{.Names}}'", (error, stdout, stderr) => {
          if (error) {
            console.error(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          var vale_ip = stdout.split('__')[0].replaceAll('_','.');
          var vale_port = stdout.split('__')[1];
          var fianl_ip = vale_ip.split('c.')[1];
          var cotainer = fianl_ip+':'+vale_port;
          console.log('sdd ',fianl_ip+':'+vale_port);
          console.log('line ',line);
          //console.log(`stdout:\n${stdout}`);
          if(cotainer == line){
              console.log('pno ',pno);
              console.log('pno2 ',pno2);
              console.log('Container Already Exists');
          }else{
              console.log('pno ',pno);
              console.log('pno2 ',pno2);
              console.log('Container Created');
          }
    }); */

//C791103152
//C_79_110_31_52__8080

/*
exec('docker run --privileged --device /dev/kvm -d -p 5906:5901 -p 2226:22 -v $(pwd)/sdk:/opt/android-sdk -v "/root/WhatsAppNode":/root/WhatsAppNode beautiful_bhabha2 thyrlian/android-sdk-vnc ', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
*/
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
  })();
  const { spawn, exec } = require('child_process');
  
  const stdin = process.openStdin();
  
  console.log(process.env.ANDROID_HOME)
   
  const TOOLS_PATH = `${process.env.ANDROID_HOME}/tools`;
  
  console.log('Starting directory: ' + process.cwd());
  try {
    //process.chdir(TOOLS_PATH);
    console.log('New directory: ' + process.cwd());
  }
  catch (err) {
    console.log('chdir: ' + err);
  }
  
  const emulator = spawn(`docker exec lucid_ardinghelli emulator`, ['-list-avds']);
  let emulatorList = []
  emulator.stdout.on('data', (resultBuffer) => {
    console.log(`stdout: ${resultBuffer}`);
  
    emulatorList = resultBuffer.toString()
                              
                             .split("\n")
                             
                             .filter(line => line.trim())
    console.log(emulatorList)
  
    console.log("Start an Emulator ")
  
    emulatorList.map ((name, i) => {
        console.log(i, '. ' + name)
    })
  });
  
  emulator.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  emulator.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  
  
  stdin.addListener('data', d => {
      if (d.length <= 0) return;
  
       const choice = parseInt(d);
       if (typeof choice === 'number' && choice < emulatorList.length) {
         console.log("choice is ", choice);
          const avdName = emulatorList[choice];
          console.log('starting avd ', avdName);
          console.log('New directory: ' + process.cwd());
  
  
          exec(`docker exec lucid_ardinghelli emulator -avd test4 -no-audio -no-boot-anim -accel on -gpu swiftshader_indirect &`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`Number of files ${stdout}`);
          });
          // const emulatorAVD = spawn(`${TOOLS_PATH}/emulator `  , [`-avd ${avdName} -netdelay none -netspeed full`]);
  
          // emulatorAVD.on('error', function( err ){
          //     console.log(err)
          //   throw err })
          // emulatorAVD.stdout.on('data', (resultBuffer) => {
          //     console.log(`avd stdout: ${resultBuffer}`);
             
          //   });
            
          //   emulatorAVD.stderr.on('data', (data) => {
          //     console.log(`avd stderr: ${data}`);
          //   });
            
          //   emulatorAVD.on('close', (code) => {
          //     console.log(`avd child process exited with code ${code}`);
          //   });
       }
    });
    
    stdin.addListener('end', () => {
      console.info(`Input: ${content}`);
    });
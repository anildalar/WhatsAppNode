const express = require('express');
const fs = require('fs');
var cors = require('cors');
var ip = require("ip");
const app = express();
const axios = require('axios');
const env = require('dotenv');
const mysql = require('mysql');
env.config();
const parsePhoneNumber = require('libphonenumber-js');
const { ProxyManager } = require("proxy-utilities");

var spawn = require('child_process').spawn;
var emuLaunch,CreateCont,apkInstall,apkOpen,alertapk2,alertapk1,agreetap,country21,inputdelete1,inputdelete,inputCC,inputNumber,numbertap1,numbertap2,numberenter1,numberenter2,numberenter3,numberenter4,enterOtp,optTap1,optTap2,optTapEnter,optTapEnter3,optTapEnter5,optTapEnter6,optTapEnter4,optTapEnter2,optTapEnter1,setUserName,userNameTap1,userNameTap2,userNameEnter

app.use(cors())
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "whatsapp_user",
    password: "password@332211", 
    database: "whatsapp_db"
  });

con.connect(function(err) {
	if (err) throw err
});
let chek = 0;
let checkOtp = 0;
async function readOTP(num){
     //return axios.get('http://173.249.39.43:300/send_sms')
    //return axios.get('http://162.55.241.59:8000/api/readopt')
    return new Promise(function(resolve, reject){
        //axios.get('http://173.249.39.43:300/send_sms')
        axios.get('http://95.217.58.34/read.php?sender=Whatsapp&number='+num)
        .then(function (response) {
            // handle success
            //console.log('opt ',response.data);
            /* if(response.data == 12345){
                chek=response.data;
                resolve(response.data);
            }else{
                //   neFun();
                resolve('0');
            } */
            if(response.status == 200 && response.statusText == 'OK'){
                if(response.data.search('code: ') == '-1'){
                    resolve('0');
                }else{
                    let otp = response.data.split('code: ')[1].split(' ')[0].replace('-','')
                    checkOtp=otp;
                    resolve(otp);
                    console.log('Opt Received -:',otp);
                }
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return 'NO'
        });
    })
    
}

const downloadImage = async (url, localPath) => {
    try {
      const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream',
      });
  
      response.data.pipe(fs.createWriteStream(localPath));
  
      return new Promise((resolve, reject) => {
        response.data.on('end', () => {
          resolve();
        });
  
        response.data.on('error', (err) => {
          reject(err);
        });
      });
    } catch (err) {
      throw new Error('Failed to download image: ' + err.message);
    }
};

async function neFun(num){
    var finalOpt = await readOTP(num);
    finalOpt=='0'?chek=0:chek=1;
    console.log('alert2',finalOpt);
}
async function oldFun(num,number,proid,contname3){
    if(chek == 0){
        neFun(num);
        var main2 = setInterval(myTimer3,3000);
        function myTimer3() {
            oldFun(num,number,proid,contname3);
        }
        setTimeout(function() {
            clearInterval(main2);
            console.log("closeInterval");
        },3600000);
        /* setTimeout(function(){
            oldFun(num,number,proid,contname3);
        },2000); */
    }else{
        console.log('Check Otp ',checkOtp);
        var indelet;
        indelet = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','67']); 
        indelet.stdout.on('data', function (data63) {
            console.log('stdoutagrre15: ' + data63.toString());
            var text63 = data63.toString();
        });
        indelet.stderr.on('data', function (data63) {   
            console.log('stderr63: ' + data63.toString());
        });
        indelet.on('exit', function (code63) {
            setTimeout(function () {
                enterOtp = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',checkOtp]); 
                enterOtp.stdout.on('data', function (data15) {
                    console.log('stdoutagrre15: ' + data15.toString());
                    var text15 = data15.toString();
                });
                enterOtp.stderr.on('data', function (data15) {   
                    console.log('stderr14: ' + data15.toString());
                });
                enterOtp.on('exit', function (code15) {
                    con.query("UPDATE doc_reg_tbl SET doc_status ='5',otp_status='read',resent_otp='NULL' WHERE doc_cont_id = 'c"+number+"'",function(err6,result6) {
                        if(err6) throw err6
                    });
                    setTimeout(function(){
                        optTap1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                        optTap2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                        optTap2.stdout.on('data', function (data16) {
                            console.log('stdoutagrre16: ' + data16.toString());
                            var text16 = data16.toString();
                        });
                        optTap2.stderr.on('data', function (data16) {   
                            console.log('stderr16: ' + data16.toString());
                        });
                        optTap2.on('exit', function (code16) {
                            console.log('okk1');
                            setTimeout(function(){
                                optTapEnter = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                optTapEnter.stdout.on('data', function (data17) {
                                    console.log('stdoutagrre16: ' + data17.toString());
                                    var text16 = data17.toString();
                                });
                                optTapEnter.stderr.on('data', function (data17) {   
                                    console.log('stderr17: ' + data17.toString());
                                });
                                optTapEnter.on('exit', function (code17) {
                                    console.log('okk2');
                                    setTimeout(function(){
                                        optTapEnter1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                        optTapEnter2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                        optTapEnter2.stdout.on('data', function (data18) {
                                            console.log('stdoutagrre18: ' + data18.toString());
                                            var text18 = data18.toString();
                                        });
                                        optTapEnter2.stderr.on('data', function (data18) {   
                                            console.log('stderr18: ' + data18.toString());
                                        });
                                        optTapEnter2.on('exit', function (code18) {
                                            console.log('okk3');
                                            setTimeout(function () {
                                                optTapEnter3 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                optTapEnter4 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                optTapEnter4.stdout.on('data', function (data19) {
                                                    console.log('stdoutagrre19: ' + data19.toString());
                                                    var text19 = data19.toString();
                                                });
                                                optTapEnter4.stderr.on('data', function (data19) {   
                                                    console.log('stderr18: ' + data19.toString());
                                                });
                                                optTapEnter4.on('exit', function (code19) {
                                                    console.log('okk4');
                                                    setTimeout(function () {
                                                        optTapEnter5 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                        optTapEnter6 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                        optTapEnter6.stdout.on('data', function (data20) {
                                                            console.log('stdoutagrre20: ' + data20.toString());
                                                            var text18 = data20.toString();
                                                        });
                                                        optTapEnter6.stderr.on('data', function (data20) {   
                                                            console.log('stderr18: ' + data20.toString());
                                                        });
                                                        optTapEnter6.on('exit', function (code20) {
                                                            console.log('okk5');
                                                                setTimeout(function () {
                                                                    setUserName = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text','Test']); 
                                                                    setUserName.stdout.on('data', function (data21) {
                                                                        console.log('stdoutagrre21: ' + data21.toString());
                                                                        var text21 = data21.toString();
                                                                    });
                                                                    setUserName.stderr.on('data', function (data21) {   
                                                                        console.log('stderr21: ' + data21.toString());
                                                                    });
                                                                    setUserName.on('exit', function (code21) {
                                                                        con.query("UPDATE doc_reg_tbl SET doc_status = '6' WHERE doc_cont_id = 'c"+number+"'",function(err7,result7) {
                                                                            if(err7) throw err7
                                                                        });
                                                                        setTimeout(function () {
                                                                            userNameTap1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                                                            userNameTap2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                                                            userNameTap2.stdout.on('data', function (data22) {
                                                                                console.log('stdoutagrre22: ' + data22.toString());
                                                                                var text22 = data22.toString();
                                                                            });
                                                                            userNameTap2.stderr.on('data', function (data22) {   
                                                                                console.log('stderr22: ' + data22.toString());
                                                                            });
                                                                            userNameTap2.on('exit', function (code22) {
                                                                                setTimeout(function () {
                                                                                    userNameEnter = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                                                    userNameEnter.stdout.on('data', function (data23) {
                                                                                        console.log('stdoutagrre23: ' + data23.toString());
                                                                                        var text23 = data23.toString();
                                                                                        console.log('Numebr Regisetr SuccessFully Process');
                                                                                    });
                                                                                    userNameEnter.stderr.on('data', function (data23) {   
                                                                                        console.log('stderr23: ' + data23.toString());
                                                                                    });
                                                                                    userNameEnter.on('exit', function (code23) {
                                                                                        setTimeout(function () {
                                                                                            con.query("UPDATE doc_reg_tbl SET doc_status='7',is_wa_reg='success' WHERE doc_cont_id = 'c"+number+"'",function(err6,result6) {
                                                                                                if(err6) throw err6
                                                                                                console.log("Number Register SuccessFully");
                                                                                            });
                                                                                        },2000);
                                                                                    }); 
                                                                                },3000);
                                                                                console.log('child process exited with code19' + code22.toString());
                                                                            });  
                                                                        },3000);
                                                                        console.log('child process exited with code18' + code21.toString());
                                                                    });  
                                                                },5000);
                                                            console.log('child process exited with code17' + code20.toString());
                                                        });
                                                    },5000);
                                                    console.log('child process exited with code17' + code19.toString());
                                                });
                                            },5000);
                                            console.log('child process exited with code17' + code18.toString());
                                        });
                                    },6000);
                                   
                                    console.log('child process exited with code17' + code17.toString());
                                });
                            },5000);
                            console.log('child process exited with code15 ' + code16.toString());
                        });
                    },6000);
                    console.log('child process exited with code15 ' + code15.toString());
                }); 
            },3000);
        });
    }
    
}
app.post('/api/resend/otp',(req,res)=>{
    if(req.query.num != ''){
        console.log('okk');
        con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err19, result19)  {
            if(err19) throw err19
            if(result19 != ''){
                var resendtap , resendtap2;
                console.log('nonon',result19[0].doc_cont_id);
                resendtap = spawn('docker', ['exec',result19[0].doc_cont_id,'adb','-s','emulator-5554','shell','input','tap','100','220']); 
                resendtap.stdout.on('data', function (data5) {
                    console.log('stdoutagrre5: ' + data5.toString());
                    var text5 = data5.toString();
                });
                resendtap.stderr.on('data', function (data5) {   
                    console.log('stderr5: ' + data5.toString());
                });
                resendtap.on('exit', function (code5) {
                    setTimeout(function () {
                        resendtap2 = spawn('docker', ['exec',result19[0].doc_cont_id,'adb','-s','emulator-5554','shell','input','tap','100','580']); 
                        resendtap2.stdout.on('data', function (data15) {
                            console.log('stdoutagrre5: ' + data15.toString());
                            var text5 = data15.toString();
                        });
                        resendtap2.stderr.on('data', function (data15) {   
                            console.log('stderr5: ' + data15.toString());
                        });
                        resendtap2.on('exit', function (code15) {
                            /* setTimeout(function () {
                                
                            },5000); */
                        });
                    },5000);
                });
            }else{
                console.log('recorde not found');
            }
        });
    }
});
app.post('/api/proxy/add',(req,res)=>{
    data = req.body;
    console.log('data', data.proxy_ips[0]);
    for(let rest of data.proxy_ips){
        console.log('dd',rest)
        var hoip = rest.split(":")[0];
        var hoport = rest.split(":")[1];
        if(typeof rest.split(":")[2] === 'undefined') {
            con.query("INSERT INTO proxy_tbl (proxy_ip,proxy_port,proxy_username,proxy_pass) VALUES ('"+hoip+"','"+hoport+"','null','null')",function(err,result) {
                if(err) throw err
            });
        }
        else {
            var houser = rest.split(":")[2]; 
            var hopass = rest.split(":")[3]; 
            console.log('se ',houser);
            console.log('se2',hopass);
            con.query("INSERT INTO proxy_tbl (proxy_ip,proxy_port,proxy_username,proxy_pass) VALUES ('"+hoip+"','"+hoport+"','"+houser+"','"+hopass+"')",function(err,result) {
                if(err) throw err
                res.status(200).json({
                    msg:"Record Inserted",
                });
            });
        }
    }
});
app.post('/api/number/add',(req,res)=>{
    data = req.body;
    if(data.wa_numbers != ''){
        for(let addnum of data.wa_numbers){
            con.query("INSERT INTO wanum_tbl (wa_no) VALUES ('"+addnum+"')",function(err,result) {
                if(err) throw err
            });
        }
    }else{
        console.log("data not found");
    }
});
app.get('/api/getdata',(req,res)=>{
    con.query("SELECT * FROM doc_reg_tbl ORDER BY ID DESC",function (err11, result11)  {
        if(err11) throw err11
        res.status(200).json({
            data:result11,
        });  
    });
});
app.get('/api/number/get',(req,res)=>{
    //SELECT * FROM wanum_tbl WHERE wanum_tbl.wa_no NOT IN (SELECT wa_no FROM doc_reg_tbl);
    con.query("SELECT * FROM wanum_tbl WHERE wanum_tbl.wa_no NOT IN (SELECT wa_no FROM doc_reg_tbl)",function (err10, result10)  {
        if(err10) throw err10
        res.status(200).json({
            data:result10,
        });  
    });
});
app.get('/api/modal/data',(req,res)=>{
    con.query("SELECT * FROM doc_reg_tbl INNER JOIN proxy_tbl ON doc_reg_tbl.proxy_id = proxy_tbl.prox_id WHERE wa_no ="+req.query.num+"",function (err11, result11)  {
        if(err11) throw err11
         res.status(200).json({
            data:result11,
         });
    });
});
app.get('/api/container/stop',(req,res)=>{
    if(req.query.num != ''){
        con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err9, result9)  {
            if(err9) throw err9
            if(result9 != ''){
                var stopcont;
                stopcont = spawn('docker', ['stop',result9[0].doc_cont_id]); 
                stopcont.stdout.on('data', function (data63) {
                    console.log('stdoutagrre15: ' + data63.toString());
                });
                stopcont.stderr.on('data', function (data63) {   
                    console.log('stderr63: ' + data63.toString());
                });
                stopcont.on('exit', function (code63) {
                    console.log('stderr63: ' + code63);
                    res.status(200).json({
                        data:'Stop',
                    });
                });     
            }
        });
        con.query("UPDATE doc_reg_tbl SET cont_status = 'stop' WHERE wa_no='"+req.query.num+"'",function(err3,result3) {
            if(err3) throw err3
        });
    }
});
app.get('/api/container/start',(req,res)=>{
    if(req.query.num != ''){
        con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err77, result77)  {
            if(err77) throw err77
            if(result77 != ''){
                var startcont,conttstart;
                startcont = spawn('docker',['start',result77[0].doc_cont_id]); 
                startcont.stdout.on('data', function (data63) {
                    console.log('stdoutagrre15: ' + data63.toString());
                });
                startcont.stderr.on('data', function (data63) {   
                    console.log('stderr63: ' + data63.toString());
                });
                startcont.on('exit', function (code63) {
                    setTimeout(function () {
                        conttstart = spawn('docker', ['exec',result77[0].doc_cont_id,'emulator','-avd','test4','-no-audio','-no-boot-anim','-accel','on','-gpu','swiftshader_indirect']);
                        conttstart.stdout.on('data', function (data63) {
                            console.log('stdoutagrre15: ' + data63.toString());
                        });
                        conttstart.stderr.on('data', function (data63) {   
                            console.log('stderr63: ' + data63.toString());
                        });
                        conttstart.on('exit', function (code63) {
                            res.status(200).json({
                                data:'Start',
                            });
                        }); 
                    },10000);
                });     
            }
        });
        con.query("UPDATE doc_reg_tbl SET cont_status = 'running' WHERE wa_no='"+req.query.num+"'",function(err3,result3) {
            if(err3) throw err3
        });
    }
});
app.get('/api/container/delete',(req,res)=>{
    /* res.status(200).json({
        data:req.query.num,
     }); */
     if(req.query.num != ''){
        con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err99, result99)  {
            if(err99) throw err99
            if(result99 != ''){
                var deletecont;
                deletecont = spawn('docker', ['rm','-f',result99[0].doc_cont_id]); 
                deletecont.stdout.on('data', function (data63) {
                    console.log('stdoutagrre15: ' + data63.toString());
                });
                deletecont.stderr.on('data', function (data63) {   
                    console.log('stderr63: ' + data63.toString());
                });
                deletecont.on('exit', function (code63) {
                    console.log('stderr63: ' + code63);
                    res.status(200).json({
                        data:'Delete',
                    });
                });     
            }
        });
        con.query("DELETE FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err111, result111)  {
            if(err111) throw err111
        });
        con.query("UPDATE doc_reg_tbl SET cont_status = 'stop' WHERE wa_no='"+req.query.num+"'",function(err3,result3) {
            if(err3) throw err3
        });
     }
});
waitapi = 0;
app.get('/api/register/status',(req,res)=>{
    let cc = parsePhoneNumber(`+${req.query.num}`).countryCallingCode;
    let number = parsePhoneNumber(`+${req.query.num}`).nationalNumber;
    con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+req.query.num+"'",function (err9, result9)  {
        if(err9) throw err9
        if(result9 == ''){
            res.status(200).json({
                message:"Number Not Found In DB",
            });
        }else{
            console.log('ddd',result9);
            console.log('data ',result9[0].doc_cont_id);
            console.log('data ',result9[0].doc_status);
            if(result9[0].doc_status == '1'){
                res.status(200).json({
                    message:"Container Created Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android" 
                });
            }
            if(result9[0].doc_status == '2'){
                res.status(200).json({
                    message:"Emulator Created Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            }
            if(result9[0].doc_status == '3'){
                res.status(200).json({
                    message:"Whatsapp Number Is Read",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            }
            if(result9[0].doc_status == '4'){
                res.status(200).json({
                    message:"OTP Sent Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            }
            if(result9[0].doc_status == '5'){
                res.status(200).json({
                    message:"OTP Read Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            }
            if(result9[0].doc_status == '6'){
                res.status(200).json({
                    message:"User Name Set Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            }
            if(result9[0].doc_status == '7'){
                res.status(200).json({
                    message:"Number Register Successfully",
                    vnc_check:"The container is up and running, use your favorite VNC client to connect to it ",
                    vnc_details:"Address -: "+result9[0].vnc_ip+":"+result9[0].vnc_con_port+" ,  Password -: android"
                });
            } 
        }
    });
});
app.get('/api/proxy/check',(req,res)=>{
    con.query("SELECT * FROM proxy_tbl WHERE proxy_tbl.prox_id NOT IN (SELECT proxy_id FROM doc_reg_tbl);",async function (err2, result2)  {
        if(err2) throw err2
            if(result2 != ''){
                res.status(200).json({
                    Message:result2.length,
                });
            }else{
                res.status(200).json({
                    Message:result2.length,
                });
            }
    });
});
app.get('/api/register',(req,res)=>{
    let cc = parsePhoneNumber(`+${req.query.num}`).countryCallingCode;
    let number = parsePhoneNumber(`+${req.query.num}`).nationalNumber;
    let wa_number = req.query.num;
    con.query("SELECT * FROM proxy_tbl WHERE proxy_tbl.prox_id NOT IN (SELECT proxy_id FROM doc_reg_tbl);",async function (err2, result2)  {
        if(err2) throw err2
            if(result2 != ''){
                for(let element of result2){
                    console.log('proxy_ip ',element.proxy_ip);
                    var proip = element.proxy_ip;
                    var proport = element.proxy_port;
                    var proid = element.prox_id;
                    createCont(cc,number,wa_number,proip,proport,proid);
                    return;
                }
            }else{
                console.log('result2 ',result2);
                console.log("Proxy Record Not Found");
            }
    });
    res.status(200).json({
        Message:"Register Wa_Number "+req.query.num+" In Progress",
        Status:"Call This API ( http://162.55.241.59:6000/api/register/status?num="+req.query.num+" )  And Check Status"
    });
   
});
let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('The server listening on port ,',port);
});
function createCont(cc,number,wa_number,proip,proport,proid){
    con.query("SELECT * FROM doc_reg_tbl ORDER BY ID DESC",function (err22, result22)  {
        if(err22) throw err22
            if(result22 == ''){
               let Container_port = 5951;
               let cli_port = 2251;
               var ipAddress = ip.address();
               con.query("INSERT INTO doc_reg_tbl (doc_cont_id,wa_no,proxy_id,is_wa_reg,doc_status,vnc_ip,vnc_con_port,vnc_port_cli) VALUES ('c"+number+"','"+wa_number+"','"+proid+"','pending','1','"+ipAddress+"','"+Container_port+"','"+cli_port+"')",function(err,result) {
                    if(err) throw err
                });
                createCont2(cc,number,wa_number,proip,proport,proid,Container_port,cli_port);
            }else{
               let Container_port = parseInt(result22[0].vnc_con_port) + 1;
               let cli_port = parseInt(result22[0].vnc_port_cli) + 1;
               var ipAddress = ip.address();
               con.query("INSERT INTO doc_reg_tbl (doc_cont_id,wa_no,proxy_id,is_wa_reg,doc_status,vnc_ip,vnc_con_port,vnc_port_cli) VALUES ('c"+number+"','"+wa_number+"','"+proid+"','pending','1','"+ipAddress+"','"+Container_port+"','"+cli_port+"')",function(err,result) {
                if(err) throw err
               });
               createCont2(cc,number,wa_number,proip,proport,proid,Container_port,cli_port);
            }
    }); 
}
function createCont2(cc,number,wa_number,proip,proport,proid,Container_port,cli_port){
    var contname3 = 'c'+number+''; 
    console.log('dd1',cc,number,wa_number,proip,proport,proid,Container_port,cli_port);
    //docker run --privileged --device /dev/kvm -d -p 5902:5901 -p 2222:22 --env HTTPS_PROXY="http://216.137.184.253:80" -v /android-sdk:/opt/android-sdk --name '+dockerId+' rm6777/api
    CreateCont = spawn('docker', ['run','--privileged','--device','/dev/kvm','-d','-p',''+Container_port+':5901','-p',''+cli_port+':22','--env','HTTPS_PROXY="http://'+proip+':'+proport+'"','-v','/android-sdk:/opt/android-sdk','--name','c'+number+'','wp_image']); 
    CreateCont.stdout.on('data', function (datastrat) {
        setTimeout(function() {
            //docker exec fervent_vaughan echo "no" | avdmanager create avd -n test5 -k "system-images;android-33;google_apis;x86_64"
            emuLaunch  = spawn('docker', ['exec',contname3,'emulator','-avd','wp','-no-audio','-no-boot-anim','-accel','on','-gpu','swiftshader_indirect']);
            emuLaunch.stdout.on('data', function (data) {
                con.query("UPDATE doc_reg_tbl SET doc_status = '2',cont_status='running' WHERE doc_cont_id = 'c"+number+"'",function(err3,result3) {
                    if(err3) throw err3
                });
                var text = data.toString();
                if( text.search(/boot completed/i) !== -1){
                    console.log('stdout: ' + data.toString()); 
                    //docker exec lucid_ardinghelli adb -s emulator-5554 install /WhatsApp.apk 
                    apkOpen = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-n','com.whatsapp/.Main']);
                    apkOpen.stdout.on('data', function (data3) {
                        console.log('stdout3: ' + data3.toString());
                        var text3 = data3.toString();
                        //console.log('Open: ' + data3.toString());
                        if( text3.search(/Starting/i) !== -1){
                            console.log('stdout3: ' + data3.toString());
                            setTimeout(function(){
                                    alertapk1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','170','430']);  
                                    setTimeout(function(){
                                        agreetap = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','150','500']); 
                                        agreetap.stdout.on('data', function (data5) {
                                            console.log('stdoutagrre5: ' + data5.toString());
                                            var text5 = data5.toString();
                                        });
                                        agreetap.stderr.on('data', function (data5) {   
                                            console.log('stderr5: ' + data5.toString());
                                        });
                                        agreetap.on('exit', function (code5) {
                                            setTimeout(function(){
                                                country21 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','21']); 
                                                country21.stdout.on('data', function (data6) {
                                                    console.log('stdoutagrre6: ' + data6.toString());
                                                    var text6 = data6.toString();
                                                });
                                                country21.stderr.on('data', function (data5) {   
                                                    console.log('stderr5: ' + data5.toString());
                                                });
                                                country21.on('exit', function (code5) {
                                                    setTimeout(function(){
                                                        inputdelete1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','67']); 
                                                        inputdelete = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','67']); 
                                                        inputdelete.stdout.on('data', function (data7) {
                                                            console.log('stdoutagrre7: ' + data7.toString());
                                                            var text7 = data7.toString();
                                                        });
                                                        inputdelete.stderr.on('data', function (data7) {   
                                                            console.log('stderr7: ' + data7.toString());
                                                        });
                                                        inputdelete.on('exit', function (code8) {
                                                            setTimeout(function(){
                                                                inputCC = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',cc]); 
                                                                inputCC.stdout.on('data', function (data9) {
                                                                    console.log('stdoutagrre8: ' + data9.toString());
                                                                    var text9= data9.toString();
                                                                });
                                                                inputCC.stderr.on('data', function (data9) {   
                                                                    console.log('stderr9: ' + data9.toString());
                                                                });
                                                                inputCC.on('exit', function (code9) {
                                                                    setTimeout(function(){
                                                                        inputNumber = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',number]); 
                                                                        inputNumber.stdout.on('data', function (data10) {
                                                                            console.log('stdoutagrre10: ' + data10.toString());
                                                                            var text10 = data10.toString();
                                                                        });
                                                                        inputNumber.stderr.on('data', function (data10) {   
                                                                            console.log('stderr10: ' + data10.toString());
                                                                        });
                                                                        inputNumber.on('exit', function (code10) {
                                                                            con.query("UPDATE doc_reg_tbl SET doc_status = '3' WHERE doc_cont_id = 'c"+number+"'",function(err4,result4) {
                                                                                    if(err4) throw err4
                                                                            });
                                                                            setTimeout(function(){
                                                                                numbertap1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                                                                numbertap1.stdout.on('data', function (data10) {
                                                                                    console.log('stdoutagrre10: ' + data10.toString());
                                                                                    var text10 = data10.toString();
                                                                                });
                                                                                numbertap1.stderr.on('data', function (data10) {   
                                                                                    console.log('stderr10: ' + data10.toString());
                                                                                });
                                                                                numbertap1.on('exit', function (code10) {
                                                                                    setTimeout(function(){
                                                                                        numbertap2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                                                        numbertap2.stdout.on('data', function (data11) {
                                                                                            console.log('stdoutagrre11: ' + data11.toString());
                                                                                            var text11 = data11.toString();
                                                                                        });
                                                                                        numbertap2.stderr.on('data', function (data11) {   
                                                                                            console.log('stderr11: ' + data11.toString());
                                                                                        });
                                                                                        numbertap2.on('exit', function (code11) {
                                                                                            setTimeout(function(){
                                                                                                numberenter1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                                                                                numberenter3 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                                                                                numberenter3.stdout.on('data', function (data12) {
                                                                                                    console.log('stdoutagrre12: ' + data12.toString());
                                                                                                    var text12 = data12.toString();
                                                                                                });
                                                                                                numberenter3.stderr.on('data', function (data12) {   
                                                                                                    console.log('stderr12: ' + data12.toString());
                                                                                                });
                                                                                                numberenter3.on('exit', function (code12) {
                                                                                                    setTimeout(function(){
                                                                                                        numberenter4 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                                                                                        numberenter4.stdout.on('data', function (data13) {
                                                                                                            console.log('stdoutagrre13: ' + data13.toString());
                                                                                                            var text13 = data13.toString();
                                                                                                        });
                                                                                                        numberenter4.stderr.on('data', function (data13) {   
                                                                                                            console.log('stderr13: ' + data13.toString());
                                                                                                        });
                                                                                                        numberenter4.on('exit', function (code13) {
                                                                                                            setTimeout(function () {
                                                                                                                var tapNenterEnd;
                                                                                                                tapNenterEnd = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','100','630']); 
                                                                                                                tapNenterEnd.stdout.on('data', function (data26) {
                                                                                                                    console.log('stdoutagrre26: ' + data26.toString());
                                                                                                                    var data26 = data26.toString();
                                                                                                                });
                                                                                                                tapNenterEnd.stderr.on('data', function (data26) {   
                                                                                                                    console.log('stderr26: ' + data26.toString());
                                                                                                                });
                                                                                                                tapNenterEnd.on('exit', function (data26) {
                                                                                                                    con.query("UPDATE doc_reg_tbl SET doc_status = '4',otp_status='sent',resent_otp='sent' WHERE doc_cont_id = 'c"+number+"'",function(err5,result5) {
                                                                                                                        if(err5) throw err5
                                                                                                                    });
                                                                                                                    setTimeout(function(){
                                                                                                                        chek=0;
                                                                                                                        oldFun(wa_number,number,proid,contname3);
                                                                                                                    },4000);
                                                                                                                    console.log('child process exited with code13 ' + data26.toString());
                                                                                                                });
                                                                                                            },4000);
                                                                                                            /* con.query("UPDATE doc_reg_tbl SET doc_status = '4' WHERE doc_cont_id = 'c"+number+"'",function(err5,result5) {
                                                                                                                if(err5) throw err5
                                                                                                            });
                                                                                                            setTimeout(function(){
                                                                                                                chek=0;
                                                                                                                oldFun(wa_number,number,proid,contname3);
                                                                                                            },2000);
                                                                                                            console.log('child process exited with code13 ' + code13.toString()); */
                                                                                                        });
                                                                                                    },5000);
                                                                                                    console.log('child process exited with code12 ' + code12.toString());
                                                                                                });
                                                                                            },5000);
                                                                                            console.log('child process exited with code11 ' + code11.toString());
                                                                                        });
                                                                                    },5000);
                                                                                    console.log('child process exited with code4 ' + code10.toString());
                                                                                });
                                                                            },5000);
                                                                            console.log('child process exited with code4 ' + code9.toString());
                                                                        });
                                                                    },5000);
                                                                    console.log('child process exited with code8 ' + code8.toString());
                                                                });
                                                            },5000);

                                                            console.log('child process exited with code7 ' + code8.toString());
                                                        });
                                                    },5000)
                                                    console.log('child process exited with code6 ' + code5.toString());
                                                });
                                            },5000);
                                            console.log('child process exited with code4 ' + code5.toString());
                                        });
                                    },5000);
                            },10000);
                        }
                    });
                    apkOpen.stderr.on('data', function (data3) {
                        console.log('stderr: ' + data3.toString());
                    });
                    apkOpen.on('exit', function (code3) {
                        console.log('child process exited with code ' + code3.toString());
                    });
                    // apkInstall = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','install','/WhatsApp.apk']);
                    // apkInstall.stdout.on('data', function (data2) {
                    //     console.log('Install: ' + data2.toString());
                    //     var text2 = data2.toString();
                    //     if( text2.search(/Success/i) !== -1){
                    //         //docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -n com.whatsapp/com.whatsapp.Main
                    //         apkOpen = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-n','com.whatsapp/com.whatsapp.Main']);
                    //         apkOpen.stdout.on('data', function (data3) {
                    //             console.log('stdout3: ' + data3.toString());
                    //             var text3 = data3.toString();
                    //             //console.log('Open: ' + data3.toString());
                    //             if( text3.search(/Starting/i) !== -1){
                    //                 console.log('stdout3: ' + data3.toString());
                    //                 setTimeout(function(){
                    //                         alertapk1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','170','430']);  
                    //                         //alertapk2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                    //                         //adb -s emulator-5554 shell input keyevent 21
                    //                         setTimeout(function(){
                    //                             agreetap = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','150','500']); 
                    //                             agreetap.stdout.on('data', function (data5) {
                    //                                 console.log('stdoutagrre5: ' + data5.toString());
                    //                                 var text5 = data5.toString();
                    //                             });
                    //                             agreetap.stderr.on('data', function (data5) {   
                    //                                 console.log('stderr5: ' + data5.toString());
                    //                             });
                    //                             agreetap.on('exit', function (code5) {
                    //                                 setTimeout(function(){
                    //                                     country21 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','21']); 
                    //                                     country21.stdout.on('data', function (data6) {
                    //                                         console.log('stdoutagrre6: ' + data6.toString());
                    //                                         var text6 = data6.toString();
                    //                                     });
                    //                                     country21.stderr.on('data', function (data5) {   
                    //                                         console.log('stderr5: ' + data5.toString());
                    //                                     });
                    //                                     country21.on('exit', function (code5) {
                    //                                         setTimeout(function(){
                    //                                             inputdelete1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','67']); 
                    //                                             inputdelete = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','67']); 
                    //                                             inputdelete.stdout.on('data', function (data7) {
                    //                                                 console.log('stdoutagrre7: ' + data7.toString());
                    //                                                 var text7 = data7.toString();
                    //                                             });
                    //                                             inputdelete.stderr.on('data', function (data7) {   
                    //                                                 console.log('stderr7: ' + data7.toString());
                    //                                             });
                    //                                             inputdelete.on('exit', function (code8) {
                    //                                                 setTimeout(function(){
                    //                                                     inputCC = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',cc]); 
                    //                                                     inputCC.stdout.on('data', function (data9) {
                    //                                                         console.log('stdoutagrre8: ' + data9.toString());
                    //                                                         var text9= data9.toString();
                    //                                                     });
                    //                                                     inputCC.stderr.on('data', function (data9) {   
                    //                                                         console.log('stderr9: ' + data9.toString());
                    //                                                     });
                    //                                                     inputCC.on('exit', function (code9) {
                    //                                                         setTimeout(function(){
                    //                                                             inputNumber = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',number]); 
                    //                                                             inputNumber.stdout.on('data', function (data10) {
                    //                                                                 console.log('stdoutagrre10: ' + data10.toString());
                    //                                                                 var text10 = data10.toString();
                    //                                                             });
                    //                                                             inputNumber.stderr.on('data', function (data10) {   
                    //                                                                 console.log('stderr10: ' + data10.toString());
                    //                                                             });
                    //                                                             inputNumber.on('exit', function (code10) {
                    //                                                                 con.query("UPDATE doc_reg_tbl SET doc_status = '3' WHERE doc_cont_id = 'c"+number+"'",function(err4,result4) {
                    //                                                                         if(err4) throw err4
                    //                                                                 });
                    //                                                                 setTimeout(function(){
                    //                                                                     numbertap1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                    //                                                                     numbertap1.stdout.on('data', function (data10) {
                    //                                                                         console.log('stdoutagrre10: ' + data10.toString());
                    //                                                                         var text10 = data10.toString();
                    //                                                                     });
                    //                                                                     numbertap1.stderr.on('data', function (data10) {   
                    //                                                                         console.log('stderr10: ' + data10.toString());
                    //                                                                     });
                    //                                                                     numbertap1.on('exit', function (code10) {
                    //                                                                         setTimeout(function(){
                    //                                                                             numbertap2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                    //                                                                             numbertap2.stdout.on('data', function (data11) {
                    //                                                                                 console.log('stdoutagrre11: ' + data11.toString());
                    //                                                                                 var text11 = data11.toString();
                    //                                                                             });
                    //                                                                             numbertap2.stderr.on('data', function (data11) {   
                    //                                                                                 console.log('stderr11: ' + data11.toString());
                    //                                                                             });
                    //                                                                             numbertap2.on('exit', function (code11) {
                    //                                                                                 setTimeout(function(){
                    //                                                                                     numberenter1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                    //                                                                                     numberenter3 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                    //                                                                                     numberenter3.stdout.on('data', function (data12) {
                    //                                                                                         console.log('stdoutagrre12: ' + data12.toString());
                    //                                                                                         var text12 = data12.toString();
                    //                                                                                     });
                    //                                                                                     numberenter3.stderr.on('data', function (data12) {   
                    //                                                                                         console.log('stderr12: ' + data12.toString());
                    //                                                                                     });
                    //                                                                                     numberenter3.on('exit', function (code12) {
                    //                                                                                         setTimeout(function(){
                    //                                                                                             numberenter4 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                    //                                                                                             numberenter4.stdout.on('data', function (data13) {
                    //                                                                                                 console.log('stdoutagrre13: ' + data13.toString());
                    //                                                                                                 var text13 = data13.toString();
                    //                                                                                             });
                    //                                                                                             numberenter4.stderr.on('data', function (data13) {   
                    //                                                                                                 console.log('stderr13: ' + data13.toString());
                    //                                                                                             });
                    //                                                                                             numberenter4.on('exit', function (code13) {
                    //                                                                                                 setTimeout(function () {
                    //                                                                                                     var tapNenterEnd;
                    //                                                                                                     tapNenterEnd = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','100','630']); 
                    //                                                                                                     tapNenterEnd.stdout.on('data', function (data26) {
                    //                                                                                                         console.log('stdoutagrre26: ' + data26.toString());
                    //                                                                                                         var data26 = data26.toString();
                    //                                                                                                     });
                    //                                                                                                     tapNenterEnd.stderr.on('data', function (data26) {   
                    //                                                                                                         console.log('stderr26: ' + data26.toString());
                    //                                                                                                     });
                    //                                                                                                     tapNenterEnd.on('exit', function (data26) {
                    //                                                                                                         con.query("UPDATE doc_reg_tbl SET doc_status = '4',otp_status='sent',resent_otp='sent' WHERE doc_cont_id = 'c"+number+"'",function(err5,result5) {
                    //                                                                                                             if(err5) throw err5
                    //                                                                                                         });
                    //                                                                                                         setTimeout(function(){
                    //                                                                                                             chek=0;
                    //                                                                                                             oldFun(wa_number,number,proid,contname3);
                    //                                                                                                         },4000);
                    //                                                                                                         console.log('child process exited with code13 ' + data26.toString());
                    //                                                                                                     });
                    //                                                                                                 },4000);
                    //                                                                                                 /* con.query("UPDATE doc_reg_tbl SET doc_status = '4' WHERE doc_cont_id = 'c"+number+"'",function(err5,result5) {
                    //                                                                                                     if(err5) throw err5
                    //                                                                                                 });
                    //                                                                                                 setTimeout(function(){
                    //                                                                                                     chek=0;
                    //                                                                                                     oldFun(wa_number,number,proid,contname3);
                    //                                                                                                 },2000);
                    //                                                                                                 console.log('child process exited with code13 ' + code13.toString()); */
                    //                                                                                             });
                    //                                                                                         },5000);
                    //                                                                                         console.log('child process exited with code12 ' + code12.toString());
                    //                                                                                     });
                    //                                                                                 },5000);
                    //                                                                                 console.log('child process exited with code11 ' + code11.toString());
                    //                                                                             });
                    //                                                                         },5000);
                    //                                                                         console.log('child process exited with code4 ' + code10.toString());
                    //                                                                     });
                    //                                                                 },5000);
                    //                                                                 console.log('child process exited with code4 ' + code9.toString());
                    //                                                             });
                    //                                                         },5000);
                    //                                                         console.log('child process exited with code8 ' + code8.toString());
                    //                                                     });
                    //                                                 },5000);

                    //                                                 console.log('child process exited with code7 ' + code8.toString());
                    //                                             });
                    //                                         },5000)
                    //                                         console.log('child process exited with code6 ' + code5.toString());
                    //                                     });
                    //                                 },5000);
                    //                                 console.log('child process exited with code4 ' + code5.toString());
                    //                             });
                    //                         },5000);
                    //                         alertapk2.stdout.on('data', function (data4) {
                    //                             console.log('stdoutagrre4: ' + data4.toString());
                    //                             var text4 = data4.toString();
                    //                         });
                    //                         alertapk2.stderr.on('data', function (data5) {   
                    //                             console.log('stderr4: ' + data5.toString());
                    //                         });
                    //                         alertapk2.on('exit', function (code5) {
                    //                             console.log('child process exited with code4 ' + code5.toString());
                    //                         });
                    //                 },10000);
                    //             }
                    //         });
                    //         apkOpen.stderr.on('data', function (data3) {
                    //             console.log('stderr: ' + data3.toString());
                    //         });
                    //         apkOpen.on('exit', function (code3) {
                    //             console.log('child process exited with code ' + code3.toString());
                    //         });
                    //         console.log('Install COmpleted')
                    //     }
                    // });
                    // apkInstall.stderr.on('data', function (data2) {
                    //     console.log('stderr: ' + data2.toString());
                    // });
                    // apkInstall.on('exit', function (code2) {
                    //     console.log('child process exited with code ' + code2.toString());
                    // });
                }
            //console.log('stdout: ' + data.toString());
            });
            emuLaunch.stderr.on('data', function (data) {   
            //console.log('stderr: ' + data.toString());
            });
            emuLaunch.on('exit', function (code) {
            console.log('child process exited with code ' + code.toString());
            });
        },10000);
    });
    CreateCont.stderr.on('data', function (datastrat) {   
        console.log('datastrat: ' + datastrat.toString());
    }); 
    CreateCont.on('exit', function (datastrat) {
        console.log('child process exited with code17' + datastrat.toString());
    });
}
function resosent(){
    res.status(200).json({
        from:req.query.from,
        to:req.query.to,
        Message:"Message Sent Successfully"
    });
}
function sndTxt(req,res,wa_from,wa_num,wa_msg,imgurl){
    if(imgurl == ''){
        
    }else{
        if(wa_num.length >= 12){
            con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+wa_from+"'",function (err66, result66)  {
                if(err66) throw err66
                if(result66 == ''){
                    console.log('Record Not Found ');
                }else{
                    var contname3 = result66[0].doc_cont_id;
                    var spawn = require('child_process').spawn,openChat,shitmsg1,shitmsg2,typeMsg,sendmsg,imgtotmp;
                    imgtotmp = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                    imgtotmp.stdout.on('data', function (sendmsg) {
                        console.log('sendmsg: ' + sendmsg.toString());
                        var sendmsg = sendmsg.toString();
                    });
                    imgtotmp.stderr.on('data', function (sendmsg) {   
                        console.log('sendmsg: ' + sendmsg.toString());
                    });
                    imgtotmp.on('exit', function (sendmsg) {
                        setTimeout(function (){
                            var imgtotmp2;
                            imgtotmp2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                            imgtotmp2.stdout.on('data', function (sendmsg) {
                                console.log('sendmsg: ' + sendmsg.toString());
                                var sendmsg = sendmsg.toString();
                            });
                            imgtotmp2.stderr.on('data', function (sendmsg) {   
                                console.log('sendmsg: ' + sendmsg.toString());
                            });
                            imgtotmp2.on('exit', function (sendmsg) {
                                setTimeout(function (){
                
                                },4000);
                            });
                        },4000);
                    });
                    openChat = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+wa_num+'&msg=MESSAGE"']); 
                    openChat.stdout.on('data', function (datamsg) {
                        console.log('stdoutagrre16: ' + datamsg.toString());
                        var datataxt = datamsg.toString();
                        if(datataxt.search(/Starting/i) !== -1){
                            setTimeout(function() {
                                //docker run --privileged --device /dev/kvm -d -p 5902:5901 -p 2222:22  -v /android-sdk:/opt/android-sdk --name '+dockerId+' rm6777/api
                                //docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "Hyy"
                                console.log('msg -: ',wa_msg);
                                typeMsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
                                typeMsg.stdout.on('data', function (datastrat1) {
                                    console.log('stdoutagrre16: ' + datastrat1.toString());
                                    var datastrat1 = datastrat1.toString();
                                });
                                typeMsg.stderr.on('data', function (datastrat1) {   
                                    console.log('datastrat: ' + datastrat1.toString());
                                });
                                typeMsg.on('exit', function (datastrat1) { 
                                    setTimeout(function () {
                                            shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','22']); 
                                    shitmsg1.stdout.on('data', function (shitmsg1) {
                                        console.log('shitmsg1: ' + shitmsg1.toString());
                                        var shitmsg1 = shitmsg1.toString();
                                    });
                                    shitmsg1.stderr.on('data', function (shitmsg1) {   
                                        console.log('shitmsg1: ' + shitmsg1.toString());
                                    });
                                    shitmsg1.on('exit', function (shitmsg1) {
                                        setTimeout(function () {
                                            shitmsg2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','22']); 
                                            shitmsg2.stdout.on('data', function (shitmsg2) {
                                                console.log('shitmsg2: ' + shitmsg2.toString());
                                                var shitmsg2 = shitmsg2.toString();
                                            });
                                            shitmsg2.stderr.on('data', function (shitmsg2) {   
                                                console.log('shitmsg2: ' + shitmsg2.toString());
                                            });
                                            shitmsg2.on('exit', function (shitmsg2) {
                                                setTimeout(function(){
                                                    sendmsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                                                    sendmsg.stdout.on('data', function (sendmsg) {
                                                        console.log('sendmsg: ' + sendmsg.toString());
                                                        var sendmsg = sendmsg.toString();
                                                    });
                                                    sendmsg.stderr.on('data', function (sendmsg) {   
                                                        console.log('sendmsg: ' + sendmsg.toString());
                                                    });
                                                    sendmsg.on('exit', function (sendmsg) {
                                                        resosent();
                                                        console.log('Msg Sent');
                                                        console.log('child process exited with code17' + sendmsg.toString());
                                                    });
                                                },2000);
                                                console.log('child process exited with code17' + shitmsg2.toString());
                                            });
                                        },2000);
                                        console.log('child process exited with code17' + shitmsg1.toString());
                                    });
                                    console.log('child process exited with code17' + datastrat1.toString());
                                    },15000);
                                    
                                });
                            },2000);
                        }
                    });
                    openChat.stderr.on('data', function (datamsg) {   
                        console.log('stderr17: ' + datamsg.toString());
                    });
                    openChat.on('exit', function (datamsg) {
                        console.log('child process exited with code17' + datamsg.toString());
                    }); 
                }
                
            });
        }else{
            res.status(404).json({
                Message:"Numebr is too Short , Number With Country Code, "
            });
        }
    }
    
}

app.get('/api/sendMsg',(req,res)=>{
    //http://162.55.241.59:8000/api/sendMsg?from=21627902569&to=447583127852&msg=yoegsh
    if(req.query.to !== '' && req.query.msg !== '' ){
        var wa_from = req.query.from;
        var wa_num = req.query.to;
        var mn_msg = req.query.msg;
        var wa_msg = mn_msg.split(' ').join('%s');
        function resosent(){
            res.status(200).json({
                from:req.query.from,
                to:req.query.to,
                Message:"Message Sent Successfully"
            });
        }
        if(wa_num.length >= 12){
            con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+wa_from+"'",function (err66, result66)  {
                if(err66) throw err66
                if(result66 == ''){
                    console.log('Record Not Found ');
                }else{
                    var contname3 = result66[0].doc_cont_id;
                    var spawn = require('child_process').spawn,openChat,shitmsg1,shitmsg2,typeMsg,sendmsg,
                    //docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d "https://api.whatsapp.com/send?phone=+917999452711&text="hello""
                    openChat = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+wa_num+'&msg=MESSAGE"']); 
                    openChat.stdout.on('data', function (datamsg) {
                        console.log('stdoutagrre16: ' + datamsg.toString());
                        var datataxt = datamsg.toString();
                        if(datataxt.search(/Starting/i) !== -1){
                            setTimeout(function() {
                                //docker run --privileged --device /dev/kvm -d -p 5902:5901 -p 2222:22  -v /android-sdk:/opt/android-sdk --name '+dockerId+' rm6777/api
                                //docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "Hyy"
                                console.log('msg -: ',wa_msg);
                                typeMsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
                                typeMsg.stdout.on('data', function (datastrat1) {
                                    console.log('stdoutagrre16: ' + datastrat1.toString());
                                    var datastrat1 = datastrat1.toString();
                                });
                                typeMsg.stderr.on('data', function (datastrat1) {   
                                    console.log('datastrat: ' + datastrat1.toString());
                                });
                                typeMsg.on('exit', function (datastrat1) { 
                                    setTimeout(function () {
                                            shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','22']); 
                                    shitmsg1.stdout.on('data', function (shitmsg1) {
                                        console.log('shitmsg1: ' + shitmsg1.toString());
                                        var shitmsg1 = shitmsg1.toString();
                                    });
                                    shitmsg1.stderr.on('data', function (shitmsg1) {   
                                        console.log('shitmsg1: ' + shitmsg1.toString());
                                    });
                                    shitmsg1.on('exit', function (shitmsg1) {
                                        setTimeout(function () {
                                            shitmsg2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','22']); 
                                            shitmsg2.stdout.on('data', function (shitmsg2) {
                                                console.log('shitmsg2: ' + shitmsg2.toString());
                                                var shitmsg2 = shitmsg2.toString();
                                            });
                                            shitmsg2.stderr.on('data', function (shitmsg2) {   
                                                console.log('shitmsg2: ' + shitmsg2.toString());
                                            });
                                            shitmsg2.on('exit', function (shitmsg2) {
                                                setTimeout(function(){
                                                    sendmsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                                                    sendmsg.stdout.on('data', function (sendmsg) {
                                                        console.log('sendmsg: ' + sendmsg.toString());
                                                        var sendmsg = sendmsg.toString();
                                                    });
                                                    sendmsg.stderr.on('data', function (sendmsg) {   
                                                        console.log('sendmsg: ' + sendmsg.toString());
                                                    });
                                                    sendmsg.on('exit', function (sendmsg) {
                                                        resosent();
                                                        console.log('Msg Sent');
                                                        console.log('child process exited with code17' + sendmsg.toString());
                                                    });
                                                },2000);
                                                console.log('child process exited with code17' + shitmsg2.toString());
                                            });
                                        },2000);
                                        console.log('child process exited with code17' + shitmsg1.toString());
                                    });
                                    console.log('child process exited with code17' + datastrat1.toString());
                                    },15000);
                                });
                            },2000);
                        }
                    });
                    openChat.stderr.on('data', function (datamsg) {   
                        console.log('stderr17: ' + datamsg.toString());
                    });
                    openChat.on('exit', function (datamsg) {
                        console.log('child process exited with code17' + datamsg.toString());
                    }); 
                }
                
            });
        }else{
            res.status(404).json({
                Message:"Numebr is too Short , Number With Country Code, "
            });
        }
        // let cc = parsePhoneNumber(`+${req.query.num}`).countryCallingCode;
        // let number = parsePhoneNumber(`+${req.query.num}`).nationalNumber;
        //sendMsg(wa_from,wa_num,wa_msg);
    }else{
        res.status(404).json({
            msg:"Message and Number is required"
        });
    }
});

/* app.get('/api/imageStored',(req, res) => {
    var image = req.query.imgurl;
}); */

app.get('/api/sendImg',(req,res)=>{
    //http://162.55.241.59:8000/api/sendMsg?from=21627902569&to=447583127852&msg=yoegsh&imgurl=
    if(req.query.to !== '' && req.query.msg !== '' ){
        var wa_from = req.query.from;
        var wa_num = req.query.to;
        var mn_msg = req.query.msg;
        var wa_msg = mn_msg.split(' ').join('%s');
       // var wa_msg = mn_msg.replaceAll('%20','%s');
        function resosent(){
            res.status(200).json({
                from:req.query.from,
                to:req.query.to,
                Message:"Message Sent Successfully"
            });
        }
        if(wa_num.length >= 12){
            con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+wa_from+"'",function (err66, result66)  {
                if(err66) throw err66
                if(result66 == ''){
                    console.log('Record Not Found ');
                }else{
                    var contname3 = result66[0].doc_cont_id;
                    var spawn = require('child_process').spawn,openChat,shitmsg1,shitmsg2,typeMsg,sendmsg,
                    //docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d "https://api.whatsapp.com/send?phone=+917999452711&msg=MESSAGE"
                    openChat = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+wa_num+'&msg=MESSAGE"']); 
                    openChat.stdout.on('data', function (datamsg) {
                        console.log('stdoutagrre16: ' + datamsg.toString());
                        var datataxt = datamsg.toString();
                        if(datataxt.search(/Starting/i) !== -1){
                            setTimeout(function() {
                                typeMsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                typeMsg.stdout.on('data', function (datastrat1) {
                                    console.log('stdoutagrre16: ' + datastrat1.toString());
                                    var datastrat1 = datastrat1.toString();
                                });
                                typeMsg.stderr.on('data', function (datastrat1) {   
                                    console.log('datastrat: ' + datastrat1.toString());
                                });
                                typeMsg.on('exit', function (datastrat1) { 
                                    setTimeout(function () {
                                        shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','61']); 
                                        shitmsg1.stdout.on('data', function (shitmsg1) {
                                            console.log('shitmsg1: ' + shitmsg1.toString());
                                            var shitmsg1 = shitmsg1.toString();
                                        });
                                        shitmsg1.stderr.on('data', function (shitmsg1) {   
                                            console.log('shitmsg1: ' + shitmsg1.toString());
                                        });
                                        shitmsg1.on('exit', function (shitmsg1) {
                                            setTimeout(function () {
                                                shitmsg2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                                                shitmsg2.stdout.on('data', function (shitmsg2) {
                                                    console.log('shitmsg2: ' + shitmsg2.toString());
                                                    var shitmsg2 = shitmsg2.toString();
                                                });
                                                shitmsg2.stderr.on('data', function (shitmsg2) {   
                                                    console.log('shitmsg2: ' + shitmsg2.toString());
                                                });
                                                shitmsg2.on('exit', function (shitmsg2) {
                                                    setTimeout(function(){
                                                        sendmsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','50','520']); 
                                                        sendmsg.stdout.on('data', function (sendmsg) {
                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                            var sendmsg = sendmsg.toString();
                                                        });
                                                        sendmsg.stderr.on('data', function (sendmsg) {   
                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                        });
                                                        sendmsg.on('exit', function (sendmsg) {
                                                            setTimeout(function(){
                                                                var sendimg
                                                                sendimg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','60','200']); 
                                                                sendimg.stdout.on('data', function (sendmsg) {
                                                                    console.log('sendmsg: ' + sendmsg.toString());
                                                                    var sendmsg = sendmsg.toString();
                                                                });
                                                                sendimg.stderr.on('data', function (sendmsg) {   
                                                                    console.log('sendmsg: ' + sendmsg.toString());
                                                                });
                                                                sendimg.on('exit', function (sendmsg) {
                                                                    setTimeout(function(){
                                                                        var sendimg11
                                                                        sendimg11 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','150','540']); 
                                                                        sendimg11.stdout.on('data', function (sendmsg) {
                                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                                            var sendmsg = sendmsg.toString();
                                                                        });
                                                                        sendimg11.stderr.on('data', function (sendmsg) {   
                                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                                        });
                                                                        sendimg11.on('exit', function (sendmsg) {
                                                                            setTimeout(function(){
                                                                                var textent3
                                                                                textent3 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
                                                                                textent3.stdout.on('data', function (sendmsg) {
                                                                                    console.log('sendmsg: ' + sendmsg.toString());
                                                                                    var sendmsg = sendmsg.toString();
                                                                                });
                                                                                textent3.stderr.on('data', function (sendmsg) {   
                                                                                    console.log('sendmsg: ' + sendmsg.toString());
                                                                                });
                                                                                textent3.on('exit', function (sendmsg) {
                                                                                    setTimeout(function(){
                                                                                        var textent4
                                                                                        textent4 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','280','380']); 
                                                                                        textent4.stdout.on('data', function (sendmsg) {
                                                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                                                            var sendmsg = sendmsg.toString();
                                                                                        });
                                                                                        textent4.stderr.on('data', function (sendmsg) {   
                                                                                            console.log('sendmsg: ' + sendmsg.toString());
                                                                                        });
                                                                                        textent4.on('exit', function (sendmsg) {
                                                                                            setTimeout(function(){
                                                                                                resosent();
                                                                                                console.log('Imsg Sent');
                                                                                                console.log('child process exited with code17' + sendmsg.toString());
                                                                                            },2000);
                                                                                        });
                                                                                    },7000);
                                                                                });
                                                                            },4000);
                                                                        });
                                                                    },4000);
                                                                });
                                                            },4000);
                                                        });
                                                    },4000);
                                                    console.log('child process exited with code17' + shitmsg2.toString());
                                                });
                                            },2000);
                                        });
                                        console.log('child process exited with code17' + datastrat1.toString());
                                    },2000);
                                });
                            },6000);
                        }
                    });
                    openChat.stderr.on('data', function (datamsg) {   
                        console.log('stderr17: ' + datamsg.toString());
                    });
                    openChat.on('exit', function (datamsg) {
                        console.log('child process exited with code17' + datamsg.toString());
                    }); 
                }
                
            });
        }else{
            res.status(404).json({
                Message:"Numebr is too Short , Number With Country Code, "
            });
        }
        // let cc = parsePhoneNumber(`+${req.query.num}`).countryCallingCode;
        // let number = parsePhoneNumber(`+${req.query.num}`).nationalNumber;
        //sendMsg(wa_from,wa_num,wa_msg);
    }else{
        res.status(404).json({
            msg:"Message and Number is required"
        });
    }
});
// app.get('/api/sendMsg/multiNumber',(req,res)=>{
//     //http://162.55.241.59:8000/api/sendMsg?from=21627902569&to=447583127852&msg=yoegsh
//     if(req.query.to !== '' && req.query.msg !== '' ){
//         var wa_from = req.query.from;
//         var numblist = req.query.to;
//         var array = JSON.parse("[" + numblist + "]");
//         console.log('okkk',array[0]);
//         var mn_msg = req.query.msg;
//         var wa_msg = mn_msg.replaceAll(' ','%s');
//         console.log('type check', typeof wa_msg);
//         res.status(404).json({
//             from:req.query.from,
//             to:req.query.to,
//             Message:"Starting Process ......"
//         });
//         var timerID = setInterval(function() {
//             con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+wa_from+"'",function (err66, result66)  {
//                 if(err66) throw err66
//                 if(result66 == ''){
//                     console.log('Record Not Found ');
//                 }else{
//                     console.log('inside',array[0]);
//                     var contname3 = result66[0].doc_cont_id;
//                     var spawn = require('child_process').spawn,openChat,shitmsg1,shitmsg2,typeMsg,sendmsg,
//                     //docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d "https://api.whatsapp.com/send?phone=+917999452711&msg=MESSAGE"
//                     openChat = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+array[0]+'&msg=MESSAGE"']); 
//                     openChat.stdout.on('data', function (datamsg) {
//                         console.log('stdoutagrre16: ' + datamsg.toString());
//                         var datataxt = datamsg.toString();
//                         if(datataxt.search(/Starting/i) !== -1){
//                             setTimeout(function() {
//                                 //docker run --privileged --device /dev/kvm -d -p 5902:5901 -p 2222:22  -v /android-sdk:/opt/android-sdk --name '+dockerId+' rm6777/api
//                                 //docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "Hyy"
//                                 typeMsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
//                                 typeMsg.stdout.on('data', function (datastrat1) {
//                                     console.log('stdoutagrre16: ' + datastrat1.toString());
//                                     var datastrat1 = datastrat1.toString();
//                                 });
//                                 typeMsg.stderr.on('data', function (datastrat1) {   
//                                     console.log('datastrat: ' + datastrat1.toString());
//                                 });
//                                 typeMsg.on('exit', function (datastrat1) {
//                                     //shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
//                                     shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','22']); 
//                                     shitmsg1.stdout.on('data', function (shitmsg1) {
//                                         console.log('shitmsg1: ' + shitmsg1.toString());
//                                         var shitmsg1 = shitmsg1.toString();
//                                     });
//                                     shitmsg1.stderr.on('data', function (shitmsg1) {   
//                                         console.log('shitmsg1: ' + shitmsg1.toString());
//                                     });
//                                     shitmsg1.on('exit', function (shitmsg1) {
//                                         setTimeout(function () {
//                                             shitmsg2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','22']); 
//                                             shitmsg2.stdout.on('data', function (shitmsg2) {
//                                                 console.log('shitmsg2: ' + shitmsg2.toString());
//                                                 var shitmsg2 = shitmsg2.toString();
//                                             });
//                                             shitmsg2.stderr.on('data', function (shitmsg2) {   
//                                                 console.log('shitmsg2: ' + shitmsg2.toString());
//                                             });
//                                             shitmsg2.on('exit', function (shitmsg2) {
//                                                 setTimeout(function(){
//                                                     sendmsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
//                                                     sendmsg.stdout.on('data', function (sendmsg) {
//                                                         console.log('sendmsg: ' + sendmsg.toString());
//                                                         var sendmsg = sendmsg.toString();
//                                                     });
//                                                     sendmsg.stderr.on('data', function (sendmsg) {   
//                                                         console.log('sendmsg: ' + sendmsg.toString());
//                                                     });
//                                                     sendmsg.on('exit', function (sendmsg) {
//                                                         setTimeout(function () {
//                                                             var lastsg;
//                                                             lastsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','tap','30','60']); 
//                                                             lastsg.stdout.on('data', function (sendmsg) {
//                                                                 console.log('sendmsg: ' + sendmsg.toString());
//                                                                 var sendmsg = sendmsg.toString();
//                                                             });
//                                                             lastsg.stderr.on('data', function (sendmsg) {   
//                                                                 console.log('sendmsg: ' + sendmsg.toString());
//                                                             });
//                                                             lastsg.on('exit', function (sendmsg) {
//                                                                 const x = array.shift();
//                                                                 console.log('Msg Sent');
//                                                                 console.log('child process exited with code17' + sendmsg.toString());
//                                                             });
//                                                         },3000);
//                                                     });
//                                                 },2000);
//                                                 console.log('child process exited with code17' + shitmsg2.toString());
//                                             });
//                                         },20000);
//                                         console.log('child process exited with code17' + shitmsg1.toString());
//                                     });
//                                     console.log('child process exited with code17' + datastrat1.toString());
//                                 });
//                             },2000);
//                         }
//                     });
//                     openChat.stderr.on('data', function (datamsg) {   
//                         console.log('stderr17: ' + datamsg.toString());
//                     });
//                     openChat.on('exit', function (datamsg) {
//                         console.log('child process exited with code17' + datamsg.toString());
//                     }); 
//                 }
                
//             });
//             if(array == ''){
//                 clearInterval(timerID);
//                 console.log('cleat Interval');
//             }
//         },10000);
        
//         // let cc = parsePhoneNumber(`+${req.query.num}`).countryCallingCode;
//         // let number = parsePhoneNumber(`+${req.query.num}`).nationalNumber;
//         //sendMsg(wa_from,wa_num,wa_msg);
//     }else{
//         res.status(404).json({
//             msg:"Message and Number is required"
//         });
//     }
// });

function sendMsg(wa_from,wa_num,wa_msg){
    con.query("SELECT * FROM doc_reg_tbl WHERE wa_no='"+wa_from+"'",function (err66, result66)  {
        if(err66) throw err66
        if(result66 == ''){
            console.log('Record Not Found ');
        }else{
            var contname3 = result66[0].doc_cont_id;
            var spawn = require('child_process').spawn,openChat,shitmsg1,shitmsg2,typeMsg,sendmsg,
            //docker exec lucid_ardinghelli adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d "https://api.whatsapp.com/send?phone=+917999452711&msg=MESSAGE"
            openChat = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','am','start','-a','android.intent.action.VIEW','-d','"https://api.whatsapp.com/send?phone=+'+wa_num+'&msg=MESSAGE"']); 
            openChat.stdout.on('data', function (datamsg) {
                console.log('stdoutagrre16: ' + datamsg.toString());
                var datataxt = datamsg.toString();
                if(datataxt.search(/Starting/i) !== -1){
                    setTimeout(function() {
                        //docker run --privileged --device /dev/kvm -d -p 5902:5901 -p 2222:22  -v /android-sdk:/opt/android-sdk --name '+dockerId+' rm6777/api
                        //docker exec lucid_ardinghelli adb -s emulator-5554 shell input text "Hyy"
                        typeMsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
                        typeMsg.stdout.on('data', function (datastrat1) {
                            console.log('stdoutagrre16: ' + datastrat1.toString());
                            var datastrat1 = datastrat1.toString();
                        });
                        typeMsg.stderr.on('data', function (datastrat1) {   
                            console.log('datastrat: ' + datastrat1.toString());
                        });
                        typeMsg.on('exit', function (datastrat1) {
                            //shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','text',wa_msg]); 
                            shitmsg1 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','22']); 
                            shitmsg1.stdout.on('data', function (shitmsg1) {
                                console.log('shitmsg1: ' + shitmsg1.toString());
                                var shitmsg1 = shitmsg1.toString();
                            });
                            shitmsg1.stderr.on('data', function (shitmsg1) {   
                                console.log('shitmsg1: ' + shitmsg1.toString());
                            });
                            shitmsg1.on('exit', function (shitmsg1) {
                                setTimeout(function () {
                                    shitmsg2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','22']); 
                                    shitmsg2.stdout.on('data', function (shitmsg2) {
                                        console.log('shitmsg2: ' + shitmsg2.toString());
                                        var shitmsg2 = shitmsg2.toString();
                                    });
                                    shitmsg2.stderr.on('data', function (shitmsg2) {   
                                        console.log('shitmsg2: ' + shitmsg2.toString());
                                    });
                                    shitmsg2.on('exit', function (shitmsg2) {
                                        setTimeout(function(){
                                            sendmsg = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent ','66']); 
                                            sendmsg.stdout.on('data', function (sendmsg) {
                                                console.log('sendmsg: ' + sendmsg.toString());
                                                var sendmsg = sendmsg.toString();
                                            });
                                            sendmsg.stderr.on('data', function (sendmsg) {   
                                                console.log('sendmsg: ' + sendmsg.toString());
                                            });
                                            sendmsg.on('exit', function (sendmsg) {
                                                /* res.status(200).json({
                                                    msg:"Msg Sent"
                                                }); */
                                                console.log('Msg Sent');
                                                console.log('child process exited with code17' + sendmsg.toString());
                                            });
                                        },2000);
                                        console.log('child process exited with code17' + shitmsg2.toString());
                                    });
                                },2000);
                                console.log('child process exited with code17' + shitmsg1.toString());
                            });
                            console.log('child process exited with code17' + datastrat1.toString());
                        });
                    },2000);
                }
            });
            openChat.stderr.on('data', function (datamsg) {   
                console.log('stderr17: ' + datamsg.toString());
            });
            openChat.on('exit', function (datamsg) {
                console.log('child process exited with code17' + datamsg.toString());
            }); 
        }
        
    });
   
    /* con.connect(function(err) {
          if (err) throw err;
            con.query("SELECT * FROM doc_reg_tbl", function (err, result, fields) {
            if (err) throw err;
                if(result[0].wa_no == wa_from){
                    
                }
          });
        }); */
}




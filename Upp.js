//console.log('stdout: ' + data.toString()); 
var spawn = require('child_process').spawn;
contname3 = 'c7697634314'
var cc = '91';
var number = '7697634314'
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
                                    //alertapk2 = spawn('docker', ['exec',contname3,'adb','-s','emulator-5554','shell','input','keyevent','66']); 
                                    //adb -s emulator-5554 shell input keyevent 21
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
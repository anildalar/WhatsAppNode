
// console.log("Set Peoxy");
const { ProxyManager } = require("proxy-utilities");
ProxyManager.fastCheck('142.252.223.243','3128').then((res) => {
                        if(res.httpsScore == 1 || res.httpScore == 1 || res.googleScore == 1){
                            var proip = element.proxy_ip;
                            var proport = element.proxy_port;
                            var proid = element.prox_id;
                            console.log('ip ',proip);
                            //createCont(cc,number,wa_number,proip,proport,proid);
                        }
                        if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
                            console.log('Proxy Not Working ');
                        }
                      }); 
                    /* let res = await ProxyManager.fastCheck(element.proxy_ip, element.proxy_port);
                    if(res.httpsScore == 1 || res.httpScore == 1 || res.googleScore == 1){
                        //console.log("Proxy", element);
                        var proip = element.proxy_ip;
                        var proport = element.proxy_port;
                        var proid = element.prox_id;
                        console.log('https w',res.httpsScore);
                        console.log('http w',res.httpScore);
                        console.log('google w',res.googleScore);
                        console.log('Proxy IP ',element.proxy_ip);
                        console.log('Proxy Port',element.proxy_port);
                        console.log('element ', element.prox_id);
                        //createCont(cc,number,wa_number,proip,proport,proid);
                        return;
                    } 
                    if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
                        console.log('Proxy Not Working ');
                    }*/
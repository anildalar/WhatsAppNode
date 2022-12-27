const { ProxyManager } = require("proxy-utilities");


// Fastcheck utilizes the class' static properties.


/* const fs = require("fs");
fs.readFile("./custorme.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
}); */
/* const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(customer);
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
}) */
 const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "password", 
  database: "testdb"
});

var ProxyVerifier = require('proxy-verifier');

/* var proxy = {
	ipAddress: '104.225.250.10',
	port: 3128,
	protocols: ['http', 'https']
}; 
var ProxyVerifier = require('proxy-verifier');

var proxy = {
	ipAddress: '104.225.250.10',
	port: 3128,
	protocol: 'http'
};

ProxyVerifier.testTunnel(proxy, function(error, result) {

	if (error) {
		// Some unusual error occurred.
    console.log('error',error);
	} else {
    console.log('DAta ',result);
		// The result object will contain success/error information.
	}
  console.log('DAta Main',result);
});
ProxyVerifier.testProtocols(proxy, function(error, results) {

	if (error) {
    console.log('error',error);
		// Some unusual error occurred.
	} else {
    console.log('DAta ',results);
		// The results object contains a result object for each protocol.
	}
  console.log('DAta Main',results);
}); */

/* ProxyManager.fastCheck('198.59.191.234', '8080').then((res) => {
  console.log('we',res);
  if(res.httpsScore == 1 || res.httpScore == 1 || res.googleScore == 1){
    console.log('https ',res.httpsScore);
    console.log('http ',res.httpScore);
    console.log('google ',res.googleScore);
    return
  }
  if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
      console.log('Proxy Not Working ');
  }
});
 */
con.connect(function(err2) {
    if (err2) throw err2;
    con.query("SELECT * FROM proxy_tbl WHERE proxy_tbl.prox_id NOT IN (SELECT proxy_id FROM doc_reg_tbl);",async function (err2, result2, fields2) {
      if (err2) throw err2;
          if(result2.length == 0){
              console.log("Proxy Record Not Found");
          }else{
            for(let element of result2){
              console.log('Befor Test',element.proxy_ip);
              ProxyManager.fastCheck(element.proxy_ip, element.proxy_port).then((res) => {
                if(res.httpsScore == 1 || res.httpScore == 1 || res.googleScore == 1){
                    var proip = element.proxy_ip;
                    var proport = element.proxy_port;
                    var proid = element.prox_id;
                    console.log('ip ',proip);
                    //createCont(cc,number,wa_number,proip,proport,proid);
                    return;
                }
                if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
                    console.log('Proxy Not Working ');
                }
              });
             /*  let res = await ProxyManager.fastCheck(element.proxy_ip, element.proxy_port);
              console.log('res',res);
              if(res.httpsScore == 1 && res.httpScore == 1 && res.googleScore == 1){
                console.log('https w',res.httpsScore);
                console.log('http w',res.httpScore);
                console.log('google w',res.googleScore);
                console.log('Proxy IP ',element.proxy_ip);
                console.log('Proxy Port',element.proxy_port);
                console.log('element ', element.prox_id);
                return;
              } 
              if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
                  console.log('Proxy Not Working ');
              } */
            }
          }
    });
});
/* con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM proxy_tbl", function (err, result, fields) {
      if (err) throw err;
      result.forEach(element => {
          console.log(element.prox_id);    
          console.log(element.proxy_ip);    
          console.log(element.proxy_port);  
          con.connect(function(err2) {
            if (err2) throw err2;
            con.query("SELECT * FROM doc_reg_tbl", function (err2, result2, fields2) {
              if (err2) throw err2;
              console.log('resutlt2 ',result2);
            });
          });
      });
      
    });
}); */

/* ProxyManager.fastCheck("8.210.83.33", 80)
.then((res) => {
    if(res.httpsScore == 1 && res.httpScore == 1 && res.googleScore == 1){
      console.log('https ',res.httpsScore);
      console.log('http ',res.httpScore);
      console.log('google ',res.googleScore);
    }
    if(res.httpsScore == 0 && res.googleScore == 0 && res.httpScore == 0){
        console.log('Proxy Not Working ');
    }
}) */


//npm install ping-proxy
/* const mysql = require('mysql');
var pingProxy = require('ping-proxy');

var con = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "password", 
  database: "testdb"
});

    con.connect(function(err) {
        if (err) throw err;
          con.query("SELECT * FROM proxy_tbl", function (err, result, fields) {
            if (err) throw err;
            result.forEach(element => {
              console.log(element.proxy_ip);
              pingProxy(
                {
                    proxyHost: element.proxy_ip,
                    proxyPort: element.proxy_port,
                    proxyTestUrl: 'https://www.google.com'
                },
              
                // Callback function to be called after the check
                function (err, options, statusCode) {
                  if (err) {
                      console.log('err');
                  }
                  if(options.proxyTestUrl.slashes == true) {
                    console.log('Options ', options);
                    console.log('Host ', options.proxyHost);
                    console.log('proxyPort ', options.proxyPort);
                    console.log('protocol ', options.proxyTestUrl.protocol);
                    console.log('slashes ', options.proxyTestUrl.slashes);
                    console.log('statusCode ', statusCode);
                    
                  }
                }
              );
            });
            //console.log('ss ',result.proxy_ip);
            
          });
    }); */
/* 

pingProxy(
  {
      proxyHost: '8.210.83.33',
      proxyPort: 80,
      proxyTestUrl: 'https://www.google.com'
  },

  // Callback function to be called after the check
  function (err, options, statusCode) {
    if (err) {
        console.log('err');
    }
    console.log('Options ', options);
    console.log('Host ', options.proxyHost);
    console.log('proxyPort ', options.proxyPort);
    console.log('protocol ', options.proxyTestUrl.protocol);
    console.log('slashes ', options.proxyTestUrl.slashes);
    console.log('statusCode ', statusCode);
  }
); */




/* const proxy_check = require('proxy-check');

proxy = '79.207.83.134:80';

proxy_check(proxy).then(r => {
  console.log(r); // true
}).catch(e => {
  console.error(e); // ECONNRESET
});
 */
/* ProxyVerifier.testAll(proxy, function(error, result) {

	if (error) {
    console.error(error);
		// Some unusual error occurred.
	} else {
    console.log(result);
		// The result object will contain success/error information.
	}
}); */
/* const proxy_check = require('proxy-check');

const proxy = {
  host: '193.163.207.133',
  port: 8080,
  proxyAuth: 'mix1534TBVDWZ:KSqF6rSb'
};
// or
// const proxy = 'y0adXjeO:pAzAHCr4@54.82.74.24:5557';

proxy_check(proxy).then(r => {
  console.log(r); // true
}).catch(e => {
  console.error(e); // ECONNRESET
});
 */
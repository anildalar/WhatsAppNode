const axios = require('axios');
// Make a request for a user with a given ID
axios.get('http://95.217.58.34/read.php?sender=Whatsapp&number=21625858168')
  .then(function (response) {
    // handle success
    
    if(response.status === 200 && response.statusText ==='OK'){
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      if(response.data.search('code: ')== '-1'){
        console.log('Opt Not Received')
      }else{
        let otp = response.data.split('code: ')[1].split(' ')[0].replace('-','')
        console.log('Opt Received -:',otp);
      }
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
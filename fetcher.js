const request = require('request'); 
const fs = require('fs');   

const input = process.argv.slice(2);  

const url = input[0];
const fileName = input[1];

request(url, (error, response, body) => {
  if(error){
    console.log(error);
    return;
  }
  if(response.statusCode !== 200) {
    console.log('error retrieving file');
    return;
  }
  fs.writeFile(fileName, body, err => { 
    if(err){
      console.error(err);
    }
    console.log(`Downloaded and saved ${url} bytes to ${fileName}`);
  });
}); 

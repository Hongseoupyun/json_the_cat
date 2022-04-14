const request = require('request');
const arguments = process.argv.slice(2);
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${arguments[0]}`;


request(URL,(error, response, body)=>{
  const data = JSON.parse(body);
  if (error) {
    console.log("Error!");
  }

  if (data.length <= 0) {
    console.log('Breeds Not Found!');
  }
  
  
  console.log(data[0].description);


});
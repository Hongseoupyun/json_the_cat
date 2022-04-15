const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  
  request(URL,(error, response, body)=>{
    const data = JSON.parse(body);
    if (error) {
      callback(error);
      return
    }
  
    if (data.length <= 0) {
      callback('Breeds Not Found!');
      return
    }
    
    
    callback(null,data[0].description);
   
  
  
  });

};

module.exports = { fetchBreedDescription };
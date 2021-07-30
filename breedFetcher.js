const request = require('request');
const urlPrefix = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName,callback) {
  request(urlPrefix + breedName, (error, response, body) => {
    if (error) {
      callback(error,null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("breed name not found");
    } else {
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription};
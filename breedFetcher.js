const request = require('request');
const process = require('process');
const args = process.argv.slice(2);
console.log(args);
const breed = args[0];
const urlPrefix = "https://api.thecatapi.com/v1/breeds/search?q=";
const url = `${urlPrefix}${breed}`;
console.log(url);
request(url, (error, response, body) => {
  if (error) {
    console.log('Request failed');
    console.log('error:', error);
  } // Print the }}error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML
  console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined) console.log('Error: Breed not available');
  console.log(data[0]);

});
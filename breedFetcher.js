const request = require('request');

const query = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const desc = JSON.parse(body)[0] ? JSON.parse(body)[0].description : 'Breed not found';
  console.log(desc);
});
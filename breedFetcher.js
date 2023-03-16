const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const desc = body && JSON.parse(body)[0] ? JSON.parse(body)[0].description : null;
    return callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };
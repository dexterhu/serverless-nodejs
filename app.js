'use strict';
const querystring = require('querystring');
const pair = require('./pair.js');

module.exports.pairs = async (event, context) => {
  const data = JSON.parse(event.body);
  var input = data.array;
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'The number of matching pair from ' + JSON.stringify(input) + ' is ' + pair.CalNoOfMatchingPairs(input)
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
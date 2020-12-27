const request = require('supertest');
module.exports = () => request('https://petstore.swagger.io/v2');

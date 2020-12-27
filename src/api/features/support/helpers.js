const supertest = require("supertest");
const Joi = require("joi");
const joiAssert = require('joi-assert');

global.Joi = Joi;
global.joiAssert = joiAssert;
global.request = supertest("https://petstore.swagger.io")
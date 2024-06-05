const express = require('express')
const studentRouter = express.Router();
const { addStudent } = require('./student.controller');

studentRouter.post('/',addStudent);

module.exports=studentRouter;
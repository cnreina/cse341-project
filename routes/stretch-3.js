const express = require('express');
const router = express.Router();
const fileSystem = require('fs');

let errorsArray = []
let resultArray = []
var option1 = 0
var option2 = 0

router.get('/', (req, res, next) => {
  res.render('pages/stretch-3', {
    title: 'Team Activity 1 - Stretch 3',
    path: 'stretch-3', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    resultArray : resultArray, 
    resultArrayCount : resultArray.length,
    option1 : option1,
    option2 : option2,
    errorsArray : errorsArray,
    errorsArrayCount : errorsArray.length
  });
  res.end();
});

router.post('/add-numbers', (req, res, next) => {
  errorsArray.length = 0
  if (req.body.op1 <= 0) {
    errorsArray.push('ERROR: First number is empty or invalid');
  };
  if (req.body.op2 <= 0) {
    errorsArray.push('ERROR: Second number is empty or invalid');
  };

  // add numbers
  if (errorsArray.length > 0) {
    console.log(errorsArray);
  } else {
    option1 = req.body.op1;
    option2 = req.body.op2;
    resultArray[0] = Number(option1) + Number(option2);
    console.log(option1 + ' + ' + option2 + ' = ' + resultArray[0]);
  };
  
  res.redirect('/ta01/stretch-3');
});

module.exports = router;

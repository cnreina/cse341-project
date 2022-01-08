const express = require('express');
const router = express.Router();
const fileSystem = require('fs');

let inputText = []

// read from file
fileSystem.readFile('stretch2.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  inputText[0] = data
});

router.get('/', (req, res, next) => {
  res.render('pages/stretch-2', {
    title: 'Team Activity 1 - Stretch 2',
    path: 'stretch-2', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    inputText : inputText, 
    numInputText : inputText.length
  });
  res.end();
});

router.post('/write-text', (req, res, next) => {
  if (req.body.writeToFile != '') {
    inputText[0] = req.body.writeToFile;
    console.log(inputText);
    // write to file
    fileSystem.writeFile('stretch2.txt', inputText[0], (err) => {
      return res.end();
    });
  };
  res.redirect('/ta01/stretch-2');
});

module.exports = router;

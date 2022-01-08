
const express = require('express');
const router = express.Router();

let users = []
let errorsArray = []

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users : users, 
    numUsers : users.length,
    errorsArray : errorsArray,
    errorsArrayCount : errorsArray.length
  });
});

router.post('/addUser', (req, res, next) => {
  errorsArray.length = 0
  // empty request
  if (req.body.addUser === '') {
    errorsArray.push('ERROR: Empty request');
  };
  // duplicated data
  if (users.indexOf(req.body.addUser) >= 0) {
    errorsArray.push('ERROR: User exist');
  };

  // add user
  if (errorsArray.length > 0) {
    console.log(errorsArray);
  } else {
    users.push(req.body.addUser);
  }

  // stay in page
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  errorsArray.length = 0
  // empty request
  if (req.body.removeUser === '') {
    errorsArray.push('ERROR: Empty request');
  };
  // no local data
  if (users.indexOf(req.body.removeUser) < 0) {
    errorsArray.push('ERROR: User does not exist');
  };

  // remove user
  if (errorsArray.length > 0) {
    console.log(errorsArray);
  } else {
    users = users.filter((user) => user !== req.body.removeUser);
  }

  // stay in page
  res.redirect('/ta02');
});

module.exports = router;

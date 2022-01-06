
const express = require('express');
const router = express.Router();

let users = []

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users : users, 
    numUsers : users.length
  });
});

router.post('/add-username', (req, res, next) => {
  if (req.body.newUserName != '') {
    users.push(req.body.newUserName);
  };
  res.redirect('/ta02');
});

router.post('/delete-username', (req, res, next) => {
  if (users.length > 0) {
    if (req.body.deleteUserName != '') {
      users = users.filter((user) => user !== req.body.deleteUserName);
    };
  };
  res.redirect('/ta02');
});

module.exports = router;


const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta01', {
    title: 'Team Activity 01',
    path: 'ta01', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
  res.end();
});

module.exports = router;

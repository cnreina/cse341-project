const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/stretch-1', {
    title: 'Team Activity 1 - Stretch 1',
    path: 'stretch-1', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
  res.end();
});

module.exports = router;


const express = require('express');
const router = express.Router();

let activities = []

router.get('/', (req, res, next) => {
  res.render('pages/ta01', {
    title: 'Team Activity 01',
    path: 'ta01', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    activities : activities, 
    numActivities : activities.length,
  });
});

module.exports = router;

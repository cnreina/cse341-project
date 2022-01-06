const express = require('express');
const router = express.Router();

let activities = []

router.get('/', (req, res, next) => {
  res.render('pages/ta01/activities', {
    title: 'Team Activity 01',
    path: '/ta01', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    activities : activities, 
    numActivities : activities.length
  });
});

router.post('/add-activity', (req, res, next) => {
  if (req.body.newActivity != '') {
    activities.push(req.body.newActivity);
  };
  res.redirect('/ta01');
});

router.post('/delete-activity', (req, res, next) => {
  if (activities.length > 0) {
    if (req.body.deleteActivity != '') {
        activities = activities.filter((activity) => activity !== req.body.deleteActivity);
    };
  };
  res.redirect('/ta01');
});

module.exports = router;

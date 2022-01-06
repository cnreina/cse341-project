const express = require('express');
const router = express.Router();

let activities = []

router.get('/', (req, res, next) => {
  res.render('pages/activities', {
    title: 'Team Activity 01 - Activities',
    path: 'activities', // For pug, EJS
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
  res.redirect('/ta01/activities');
});

router.post('/delete-activity', (req, res, next) => {
  if (activities.length > 0) {
    if (req.body.deleteActivity != '') {
        activities = activities.filter((activity) => activity !== req.body.deleteActivity);
    };
  };
  res.redirect('/ta01/activities');
});

module.exports = router;

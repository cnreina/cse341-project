// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost

const app = express();

// Route setup. You can implement more in the future!
const ta01Routes        = require('./routes/ta01');
const ta02Routes        = require('./routes/ta02');
const ta03Routes        = require('./routes/ta03');
const ta04Routes        = require('./routes/ta04');
const activitiesRoutes  = require('./routes/activities');
const stretch1Routes    = require('./routes/stretch-1');
const stretch2Routes    = require('./routes/stretch-2');
const stretch3Routes    = require('./routes/stretch-3');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // For view engine as Pug
  //.set('view engine', 'pug') // For view engine as PUG.
  // For view engine as hbs (Handlebars)
  //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
  //.set('view engine', 'hbs')
  .use(bodyParser.urlencoded({ extended: false })) // For parsing the body of a POST
  .use('/ta01/activities', activitiesRoutes)
  .use('/ta01/stretch-1', stretch1Routes)
  .use('/ta01/stretch-2', stretch2Routes)
  .use('/ta01/stretch-3', stretch3Routes)
  .use('/ta01', ta01Routes)
  .use('/ta02', ta02Routes)
  .use('/ta03', ta03Routes)
  .use('/ta04', ta04Routes)
  .get('/', (req, res, next) => {
    // This is the primary index, always handled last.
    res.render('pages/index', {
      title: 'Welcome to my CSE341 repo',
      path: '/',
    });
  })
  .use((req, res, next) => {
    // 404 page
    res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

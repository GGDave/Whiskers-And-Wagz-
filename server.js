const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');//calls the app.use(express.static(path.join(__dirname, 'public'))); line
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


///// /////Handlebars constants/////////////
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  });
/////// Handlebars module setup/////////////
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
////////////////////////////////////////////

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));// pulls in the public folder
app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});


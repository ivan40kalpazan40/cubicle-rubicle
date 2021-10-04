const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];

const initDb = require('./config/db');
const Cube = require('./models/Cube');
const port = 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
console.log(config);
initHandlebars(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);
initDb(config.DB_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to DATABASE');
    app.listen(
      config.PORT,
      console.log.bind(console, `Server is running on port ${port}...`)
    );
  })
  .catch((err) => console.log(`ERR:: ${console.error(err)}`));

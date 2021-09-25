const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');
const routes = require('./routes');

const port = 3000;

const app = express();

initHandlebars(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);
app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

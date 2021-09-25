const express = require('express');
const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);

app.all('/', (req, res) => {
  res.render('index');
});
const port = 3000;

app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

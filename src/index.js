const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.all('/', (req, res) => {
  res.render('index');
});
const port = 3000;

app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

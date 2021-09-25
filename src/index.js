const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.set('views', path.resolve('./src/views'));
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.all('/', (req, res) => {
  res.render('index', { layout: false });
});
const port = 3000;

app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

const express = require('express');
const app = express();

app.all('/', (req, res) => {
  res.send('Welcome to Express.js');
  res.end();
});
const port = 3000;

app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

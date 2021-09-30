const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebars');
const routes = require('./routes');
const initDb = require('./config/db');
const Cube = require('./models/Cube');
const port = 5000;

initDb()
  .then((res) => {
    console.log('Connected to DATABASE');
    // Cube.create({
    //   name: 'Snake Cube',
    //   description:
    //     'This is not quite a cube, but it is in the same leage of puzzles.',
    //   imageUrl: 'https://m.media-amazon.com/images/I/51CfisCGpLL._SL1080_.jpg',
    //   difficulty: 7,
    // });

    
  })
  .catch((err) => console.log(`ERR:: ${console.error(err)}`));
const app = express();
app.use(express.urlencoded({ extended: true }));

initHandlebars(app);
app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);
app.listen(
  port,
  console.log.bind(console, `Server is running on port ${port}...`)
);

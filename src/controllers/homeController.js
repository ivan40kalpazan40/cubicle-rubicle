const express = require('express');
const { Error } = require('mongoose');
const cubeService = require('../services/cubeService');
const router = express.Router();
let counter = 0;

const renderHome = (req, res) => {
  cubeService
    .getAll()
    .then((cubes) => {
      const items = cubes.map((cube) => {
        return {
          id: cube.id,
          name: cube.name,
          imageUrl: cube.imageUrl,
          description: cube.description,
          difficulty: cube.difficulty,
        };
      });
      res.render('index', { items });
    })
    .catch((err) => console.error(`DB.FIND.ERR:: ${err.error}`));
};
const renderAbout = (req, res) => {
  res.render('about');
};

const search = (req, res) => {
  let { search, from, to } = req.query;
  cubeService
    .getAll()
    .then((cubes) => {
      let items = cubes.map((cube) => {
        return {
          id: cube.id,
          name: cube.name,
          imageUrl: cube.imageUrl,
          description: cube.description,
          difficulty: cube.difficulty,
        };
      });
      if (search) {
        items = items.filter((x) =>
          x.name.toLowerCase().includes(search.toLowerCase())
        );
        console.log(items);
      }
      if (from) {
        items = items.filter((x) => x.difficulty >= from);
      }
      if (to) {
        items = items.filter((x) => x.difficulty <= to);
      }

      res.render('index', { title: 'SEARCH', items });
    })
    .catch((err) => {
      console.log(err);
      const er = new Error('Search error');
      res.render('404', { error: er.name, msg: er.message });
    });
};

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/search', search);

module.exports = router;

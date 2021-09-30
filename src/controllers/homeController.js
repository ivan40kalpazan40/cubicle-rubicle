const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

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
  let cubes = cubeService.search(search, from, to);
  res.render('index', { title: 'SEARCH', cubes });
};

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/search', search);

module.exports = router;

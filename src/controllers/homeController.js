const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const renderHome = (req, res) => {
  const cubes = cubeService.getAll();
  res.render('index', { cubes });
};
const renderAbout = (req, res) => {
  res.render('about');
};

const search = (req, res) => {
  let { search, from, to } = req.query;
  let cubes = cubeService.search(search, from, to);
  console.log(search);
  res.render('index', { cubes });
};

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/search', search);

module.exports = router;

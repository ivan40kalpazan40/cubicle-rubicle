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

router.get('/', renderHome);
router.get('/about', renderAbout);

module.exports = router;

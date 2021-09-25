const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const renderHome = (req, res) => {
  const cubes = cubeService.getAll();
  res.render('index', { cubes });
};

router.get('/', renderHome);

module.exports = router;

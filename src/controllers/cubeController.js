const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const cubeDetails = (req, res) => {
  let cube = cubeService.getOne(req.params.cubeId);
  res.render('details', { ...cube });
};

const getCreateCube = (req, res) => {
  let cubes = cubeService.getAll();
  console.log(cubes);
  res.render('create');
};
const createCube = (req, res) => {
  console.log(req.body);
  const { name, description, imageUrl, difficulty } = req.body;
  cubeService.create(name, description, imageUrl, difficulty);
  res.redirect('/');
};

router.get('/create', getCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
module.exports = router;

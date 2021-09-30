const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const cubeDetails = (req, res) => {
  let cube = cubeService.getOne(req.params.cubeId);
  res.render('details', { ...cube });
};

const getCreateCube = (req, res) => {
  let cubes = cubeService.getAll().then((cubes) => {
    //console.log(cubes);
    res.render('create');
  });
};
const createCube = (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  cubeService
    .create(name, description, imageUrl, difficulty)
    .then((cube) => {
      console.log(cube);
      console.log('Cube created');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(`ERR:: ${err.message}`);
      res.render('404', { msg: err.name });
    });
};

router.get('/create', getCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
module.exports = router;

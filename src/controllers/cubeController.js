const express = require('express');
const cubeService = require('../services/cubeService');
const router = express.Router();

const cubeDetails = async (req, res) => {
  const cubeId = await req.params.cubeId;
  try {
    const cube = await cubeService.getOne(cubeId);
    res.render('details', { ...cube });
  } catch (err) {
    console.log(err);
    res.render('404', { error: err.name, msg: err.message });
  }
};

const getCreateCube = async (req, res) => {
  //let cubes = await cubeService.getAll().then((cubes) => {
  //console.log(cubes);

  //});
  res.render('create');
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
      const er = new Error('Form fields must not be empty');
      console.log(`ERR:: ${er}`);
      res.render('404', { error: er.name, msg: er.message });
    });
};

router.get('/create', getCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
module.exports = router;

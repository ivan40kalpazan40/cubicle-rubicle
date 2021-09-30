const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const getAll = async () => {
  const cubes = await Cube.find();
  return cubes;
};
const getOne = (id) => Cube.findById(id);

const create = (name, description, imageUrl, difficulty) => {
  return Cube.create({ name, description, imageUrl, difficulty });
};
const search = (text, from, to) => {
  let result = Cube.cubes;
  if (text) {
    result = result.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((x) => x.difficulty >= from);
  }

  if (to) {
    result = result.filter((x) => x.difficulty < to);
  }
  return result;
};

const cubeService = { create, getAll, getOne, search };
module.exports = cubeService;

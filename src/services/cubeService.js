const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const getAll = async () => {
  const cubes = await Cube.find();
  return cubes;
};
const getOne = (id) => Cube.findById(id);

const create = (name, description, imageUrl, difficulty) => {
  return Cube.create({ name, description, imageUrl, difficulty });
};
const newAccessory = (name, description, imageUrl) => {
  return Accessory.create({ name, description, imageUrl });
};

const cubeService = { create, getAll, getOne, newAccessory };
module.exports = cubeService;

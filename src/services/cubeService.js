const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const getAll = async () => {
  const cubes = await Cube.find().lean();
  return cubes;
};
const getOne = async (id) => {
  const cube = await Cube.findById(id).lean();
  return cube;
};

const create = (name, description, imageUrl, difficulty) => {
  return Cube.create({ name, description, imageUrl, difficulty });
};
const newAccessory = (name, description, imageUrl) => {
  return Accessory.create({ name, description, imageUrl });
};

const allAccessories = async () => {
  const accessories = await Accessory.find({}).lean();
  return accessories;
};

const cubeService = { create, getAll, getOne, newAccessory, allAccessories };
module.exports = cubeService;

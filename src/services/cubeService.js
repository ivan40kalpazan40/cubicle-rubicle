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

  // Find all entries in DB and store in const
  // Cube.find()
  // Filter consequently text, from, to and leave out not matched data
  // 

};

const cubeService = { create, getAll, getOne, search };
module.exports = cubeService;

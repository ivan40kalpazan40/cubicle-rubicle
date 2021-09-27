const Cube = require('../models/Cube');
const getAll = () => Cube.getAll();
const getOne = (id) => Cube.cubes.find((x) => x.id === id);

const create = (name, description, imageUrl, difficulty) => {
  let cube = new Cube(name, description, imageUrl, difficulty);
  Cube.add(cube);
};
const search = (text, from, to) => {
  return Cube.cubes.filter((x) => x.name.toLowerCase().includes(text.toLowerCase()));
};

const cubeService = { create, getAll, getOne, search };
module.exports = cubeService;

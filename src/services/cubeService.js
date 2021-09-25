const Cube = require('../models/Cube');
const cubeDb = [
  {
    name: 'Classic Rubik Cube',
    description: 'This is the classic. Can you solve this cube?',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png',
    difficulty: '3',
  },
];
const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
  let cube = new Cube(name, description, imageUrl, difficulty);
  cubeDb.push(cube);
};

const cubeService = { create, getAll };
module.exports = cubeService;

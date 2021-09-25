const uniqid = require('uniqid');
class Cube {
  static #cubes = [
    {
      id:'dafgdfdgdsadfsgf326534tgvrge5t43wrqeq',
      name: 'Classic Rubik Cube',
      description: 'This is the classic. Can you solve this cube?',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png',
      difficulty: '3',
    },
  ];

  constructor(name, description, imageUrl, difficulty) {
    this.id = uniqid();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
  }
  static getAll() {
    return Cube.#cubes.slice();
  }
  static add(cube) {
    Cube.#cubes.push(cube);
  }
}
module.exports = Cube;

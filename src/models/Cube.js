const uniqid = require('uniqid');
class Cube {
  static cubes = [
    {
      id: 'dafgGgDf326534tgv',
      name: 'Classic Rubik Cube',
      description: 'This is the classic. Can you solve this cube?',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png',
      difficulty: '3',
    },
    {
      id: '4z3c516biktzwf38y',
      name: 'Magic Cube',
      description: "This is the small brother of the classic Rubik's cube.",
      imageUrl:
        'https://lh3.googleusercontent.com/uCld2EUp74IDupx8rBVz-lOsmfdwobiXYrpJfQhoPn7C-1g7kPXrDkQCWGKbLC6xRqBp',
      difficulty: '2',
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
    return Cube.cubes.slice();
  }
  static add(cube) {
    Cube. cubes.push(cube);
  }
}
module.exports = Cube;

const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 250 },
  imageUrl: { type: String },
  difficulty: { type: Number, min: 1, max: 10 },
});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;

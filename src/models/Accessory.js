const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: [/^http?s:\/\//i, 'Invalid url format'],
  },
  description: { type: String, required: true, maxlength: 500 },
  cubes: { type: Array, type: mongoose.Schema.Types.ObjectId, ref: 'Cube' },
});

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;

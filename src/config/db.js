const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://ivan:1234@cubicle.d4453.mongodb.net/database?retryWrites=true&w=majority';

const initDb = () => {
  return mongoose.connect(connectionString);
};

module.exports = initDb;

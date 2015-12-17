var mongoose = require('mongoose');

var SpiritAnimalSchema = new mongoose.Schema({
  Name: String,
  SpiritAnimal: String,
  DoTheyLikeIt: Boolean
});

// String, Number, Date, Boolean, Buffer, Mixed, Array

module.exports = mongoose.model('SpiritAnimal', SpiritAnimalSchema);

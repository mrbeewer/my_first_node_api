// mongoose is my ORM object relational mapper
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/spiritanimals";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to
mongoose.connection.on('connected', function() {
  console.log("Connected!");
});

mongoose.connection.on('error', function() {
  console.log("Error!" + error);
});

mongoose.connection.on('disconnected', function() {
  console.log("Disconnected!");
});

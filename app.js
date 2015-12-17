var http = require('http');

require('./db/database');
var SpiritAnimal = require('./models/SpiritAnimal');

// .create ({data object}, function(error, model))
SpiritAnimal.create({Name: "Aaron", SpiritAnimal: "Red Panda", DoTheyLikeIt: true}, function(error, animal) {
  if (error) return console.log(error);
  console.log(animal.id);
});

SpiritAnimal.find(function(err, animals) {
  console.log(err);
  console.log('animals--');
  console.log(animals);
  // SpiritAnimal.findByIdAndRemove(animals.id);
});

http.createServer(function(req, res) {
  SpiritAnimal.find(function(error, animals) {
    if (error) return console.log(error);

    console.log(JSON.stringify(animals).id);
    res.writeHead(200);
    res.write(JSON.stringify(animals));
    res.end();
  });
}).listen(8080);


console.log("Server is running on port 8080");

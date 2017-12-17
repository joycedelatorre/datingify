var friends = require("../data/friends");
var path = require("path"); 
var fs = require('file-system');

//This way of writing module.exports works too!
module.exports = function(app){
  app.post("/api/friends", function(req, res){
    var newFriend = req.body
    console.log(newFriend);
    //push the new Object to a the file friends 
    friends.push(newFriend); 
    // FS module is used to overwrite the old list with a new list and be able to save it.
    fs.writeFile('app/data/friends.js', JSON.stringify(friends),(err)=> {
      if(err) throw err;
      console.log('The file has been saved!');
    })
    res.json(newFriend);
  });

  app.get("/api/friends", function(req, res){
    // res.sendFile(path.join(__dirname, "../data/friends.js"));
    res.json(friends);
  })
}

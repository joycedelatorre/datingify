var friends = require("../data/friends");
var path = require("path"); 

//This way of writing module.exports works too!
module.exports = function(app){
  app.post("/api/friends", function(req, res){
    var newFriend = req.body
    console.log(newFriend);
    //push the new Object to a the file friends 
    res.json(newFriend);
  });

  app.get("/api/friends", function(req, res){
    // res.sendFile(path.join(__dirname, "../data/friends.js"));
    res.json(friends);
  })
}

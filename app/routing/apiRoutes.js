var friends = require("../data/friends");
var path = require("path"); 
var fs = require('file-system');

//This way of writing module.exports works too!
module.exports = function(app){
  app.post("/api/friends", function(req, res){
    var newFriend =req.body;
    console.log(newFriend);
    console.log(newFriend.scores);
    //push the new Object to a the file friends 
    friends.push(newFriend); 
    // FS module is used to overwrite the old list with a new list and be able to save it.
    // fs.writeFile('app/data/friends.js', JSON.stringify(friends),(err)=> {
    //   if(err) throw err;
    //   console.log('The file has been saved!');
    // });
      var leastcompatibilityScore = 40;
      var currentCompatibleFriend = 0;
      var finalScores =[]

    for(var i =0; i<friends.length; i++){
      var friendScores = friends[i].scores;
      var placeholder = 0;
      for(var j=0; j<friendScores.length; j++){
        var diff = Math.abs(parseInt(friendScores[i])- parseInt(newFriend.scores[i])); 
        placeholder = diff + placeholder;
      }
      finalScores.push(placeholder);
    }

    for(var a = 0; a<finalScores.length; a++){
      if(finalScores[a] < leastcompatibilityScore){
        leastcompatibilityScore = finalScores[a];
        currentCompatibleFriend = a;
      }
    }
    res.json(friends[currentCompatibleFriend]);
  });

  app.get("/api/friends", function(req, res){
    // res.sendFile(path.join(__dirname, "../data/friends.js"));
    res.json(friends);
  })
}

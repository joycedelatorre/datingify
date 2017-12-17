// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); // used to simplify filepaths

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// app.get("/", function(req, res){
// 	res.sendFile(path.join(__dirname, "view.html"));
// })

// app.get("/survey", function(req, res){
// 	res.sendFile(path.join(__dirname, "survey.html"));
// })
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
})
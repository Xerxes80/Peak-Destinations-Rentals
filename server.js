//<!-- team -->

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

// Initialize the App
var app = express();

// Uses morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

// Public static directory
app.use(express.static("public"));

// Database configuration with mongoose (CHECK ON SYNTAX)
var db = process.env.MONGODB_URI || "mongodb://localhost/mongotest";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
 // Log any errors connecting with mongoose
 if (error) {
   console.log(error);
 }
 // Or log a success message
 else {
   console.log("mongoose connection is successful");
 }
});


var PORT = process.env.PORT || 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

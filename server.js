var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Equipments = require("./models/equipments.js");
mongoose.Promise = Promise;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static("public"));

var db = process.env.MONGODB_URI || "mongodb://localhost/peak-dest-rentals01";

mongoose.connect(db, function(error) {

 if (error) {
   console.log(error);
 }
 else {
   console.log("mongoose connection is successful");
 }
});

var PORT = process.env.PORT || 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/api/data", function(req, res) {

  Equipments.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// app.post("/api/data", function(req, res) {
//   var newData = new Equipments(req.body);

//   console.log(req.body);

//   newData.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

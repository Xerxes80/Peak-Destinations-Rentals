var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
var Equipments = require("./models/equipments.js");
var User = require("./models/user.js");
mongoose.Promise = Promise;

var app = express();


var db = process.env.MONGODB_URI || "mongodb://localhost/peak-dest-rentals01";

mongoose.connect(db, function(error) {

 if (error) {
   console.log(error);
 }
 else {
   console.log("mongoose connection is successful");
 }
});
// mongoose.connect("mongodb://localhost/peak-dest-rentals01");
// var db = mongoose.connection;

//handle mongo error
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log("mongoose connection is successful");
// });

// app.use(logger("dev"));
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));
app.use(bodyParser.urlencoded({
	extended: false
}));

//var userRoutes = require('./app/config/userRouter');
// app.use('/', userRoutes);

app.use(express.static("public"));
//app.use(express.static(__dirname + '/public'));

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
app.get("/api", function(req, res) {

  User.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.post("/api", function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body);

  User.save(newUser, function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// app.use(function (req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

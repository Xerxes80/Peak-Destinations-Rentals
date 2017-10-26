var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var Equipments = require("./models/equipments.js");
var User = require("./models/user.js");
var Reservations = require("./models/reservations.js");
var Cart = require("./models/cart.js");
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
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

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
app.get("/api/cart", function(req, res) {

  Cart.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.get("/getProfile/", function(req, res) {
var id =req.param("id") ;
console.log(id);
  User.find({"_id": id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.get("/getRes/", function(req, res) {
var id =req.param("id") ;
console.log(id);
  Reservations.find({"userId": id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.get("/getEmail/", function(req, res) {
var email =req.param("email") ;
console.log(email);
  User.find({"email": email})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

app.get("/signin/", function(req, res) {
var email =req.param("email") ;
var pass =req.param("password");
console.log(email);
console.log(pass);
  User.find({"email": email, "password": pass})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.post("/signup", function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body);

  User.create(newUser, function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.post("/cart", function(req, res) {
  var newCart = new Cart(req.body);

  User.update({"_id": req.body.userId}, {$push: {"cart": req.body.itemId}}, function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  
});
app.post("/cartempty", function(req, res) {
console.log("empty");
  User.update({"_id": req.body.userId}, {$unset: {"cart": ""}}, function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  
});
app.post("/reserve", function(req, res) {
  var newRes = new Reservations(req.body);

  console.log(req.body);
  console.log(req.body.userId);
  console.log(req.body.item);
  Reservations.create(newRes, function(err, doc) {

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

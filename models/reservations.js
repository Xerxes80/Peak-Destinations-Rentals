var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  userId: {
    type: String
  },
  firstName:{
  	type: String
  },
  lastName:{
    type: String
  },
  email:{
    type: String
  },
  phone:{
    type: String
  },
  pickUp: {
    type: Date
  },
  dropOff:{
    type: Date
  },
  location:{
    type: String
  },
  items: {
    type: Array
  },
  total:{
    type: Number
  }
});

var Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;
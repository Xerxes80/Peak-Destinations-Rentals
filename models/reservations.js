var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  userId: {
    type: String
  },
  info:{
  	type: String
  },
  location: {
    type: String
  },
  items: {
    type: Array
  },
  total_price:{
    type: Number
  }
});

var Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;
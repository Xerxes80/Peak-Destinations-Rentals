var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationsSchema = new Schema({
  name: {
    type: String
  },
  address:{
  	type: String
  },
  lat: {
    type: Double
  },
  long: {
    type: Double
  }
});

var Locations = mongoose.model("Locations", LocationsSchema);
module.exports = Locations;
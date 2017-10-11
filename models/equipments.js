var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EquipmentsSchema = new Schema({
  category: {
    type: String
  },
  name:{
    type: String
  },
  icon:{
    type: String
  },
  img:{
    type: Array
  },
  brand: {
    type: String
  },
  desc: {
    type: String
  },
  price: {
    type: Number
  }

});

var Equipments = mongoose.model("Equipments", EquipmentsSchema);
module.exports = Equipments;
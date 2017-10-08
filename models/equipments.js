var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EquipmentsSchema = new Schema({
  category: {
    type: String
  },
  img:{
    type: String
  },
  brand: {
    type: String
  },
  level: {
    type: String
  },
  price: {
    type: number
  },
  desc: {
    type: String
  }

});

var Equipments = mongoose.model("Equipments", EquipmentsSchema);
module.exports = Equipments;
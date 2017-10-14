var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CartSchema = new Schema({
  userId: {
    type: String
  },
  itemId:{
  	type: String
  }
});

var Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
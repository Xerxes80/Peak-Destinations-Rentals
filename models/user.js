var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  profile: [ 
       
        name : {
        	type: String
        },
        email : {
        	type: String
        },
        level: {
        	type: String
        }

    ],
  cart: {
   		eq_id: {
   			type: array
   		}
   	},
  upcoming_res: [ 
       
        date : {
        	type: String
        },
        charges : {
        	type: Double
        },
        equipments: {
        	type: Array
        },
        orederDate: {
          type: Timestamp  
	      }
    ]
  //   ,
  // orderHistory:[ 
       
  //       date : {
  //       	type: String
  //       },
  //       charges : {
  //       	type: Double
  //       },
  //       equipments: {
  //       	type: Array
  //       }
	    
  //   ]

   

});

var User = mongoose.model("User", UserSchema);
module.exports = User;
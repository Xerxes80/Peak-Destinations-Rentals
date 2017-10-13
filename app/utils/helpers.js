var axios = require("axios");

var helpers = {

  getAll: function() {
    return axios.get("/api/data")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  getUser: function(email, password) {
    return axios.get("/api",{
    	params: {
    		"email": email,
    		"password": password
    	}
    })
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  runQuery: function(email) {
    return axios.get("/api",{
      // params: {
      //   "email": email
      // }
    })
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  postUser: function(email, password, username){
  	var newUser = {email: email, password:password, username: username};
  	return axios.post("/api/user", newUser)
      .then(function(response) {
        console.log("axios results", response);
        return response;
      });
  }
};

module.exports = helpers;

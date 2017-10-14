var axios = require("axios");

var helpers = {

  getAll: function() {
    return axios.get("/api/data")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  getUser: function() {
    return axios.get("/signin")
      // params: {
      //  "email": email,
      //  "password": password
      // }
    
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  getCart: function() {
    return axios.get("/api/cart")
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
  postCart: function(userId, itemId){
    var newCart = {userId: userId, itemId: itemId};
    return axios.post("/cart", newCart)
      .then(function(response) {
        console.log("axios results", response);
        return response;
      });
  },
  postUser: function(email, password, username){
    var newUser = {email: email, password:password, username: username};
    return axios.post("/signup", newUser)
      .then(function(response) {
        console.log("axios results", response);
        return response;
      });
  }
};

module.exports = helpers;

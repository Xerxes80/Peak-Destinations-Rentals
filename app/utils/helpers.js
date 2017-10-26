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
      return axios.get("/signin", {
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
  updateCard: function(userId){
    var newCart = {userId: userId};
    return axios.post("/cartempty", newCart)
      .then(function(response) {
        console.log("axios results", response);
        return response;
      });
  },
  getRes: function(userId){
    return axios.get("/getRes", {
      params: {
       "id": userId
      }
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
  postRes: function(userId, firstName, lastName, 
                    email, phone, pickUp, dropOff, 
                    location, total, items){
    console.log("okkkkkkkkkkkkkkkkkk");
    var newRes = {userId: userId, firstName: firstName, 
                  lastName: lastName, email: email, 
                  phone: phone, pickUp: pickUp, 
                  dropOff: dropOff, location: location, 
                  total: total, items: items};
    return axios.post("/reserve", newRes)
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
  },
  getProfile: function(userId){
    return axios.get("/getProfile", {
      params: {
       "id": userId
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    }); 
  },
  getEmail: function(email) {
    return axios.get("/getEmail", {
      params: {
       "email": email
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};

module.exports = helpers;

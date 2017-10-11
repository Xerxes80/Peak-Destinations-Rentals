var axios = require("axios");

var helpers = {

  getAll: function() {
    return axios.get("/api/data")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  }
  
};

module.exports = helpers;

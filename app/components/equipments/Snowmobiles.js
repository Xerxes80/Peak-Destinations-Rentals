var React = require("react");


var Snowmobiles = React.createClass({

  getInitialState: function() {
    return {

    };
  },


  render: function() {
 

    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
            <h2 className="text-center"><strong>Snowmobiles</strong></h2>
          </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Snowmobiles;
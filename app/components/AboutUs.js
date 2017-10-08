var React = require("react");

var Account = React.createClass({


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
            <h2 className="text-center"><strong>ABOUT US</strong></h2>
            </div>
            <div className="imgContainer Niki">Niki</div>
            <div className="imgContainer Jessica">Jessica</div>
            <div className="imgContainer Tony">Tony</div>
            <div className="imgContainer Tyler">Tyler</div>
            <div className="imgContainer Kevin">Kevin</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Account;
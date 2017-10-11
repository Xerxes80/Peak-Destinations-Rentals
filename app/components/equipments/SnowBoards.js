var React = require("react");
var helpers = require("../../utils/helpers");

var Snowboards = React.createClass({

  getInitialState: function() {
    return {
        snowboards: []
    };
  },
  componentDidMount: function() {
    helpers.getAll().then(function(results) {
      var newArray =[];
      for (var i=0; i<results.data.length; i++){
        (results.data[i].category == "snowboards") ? 
        newArray.push(results.data[i]) : null
        
      }
      this.setState({ snowboards: newArray });
      console.log("Data", this.state.snowboards);
    }.bind(this));
  },

  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

  },
  
  render: function() {
 

    return (
      <div className="">
        <div className="page-header" data-parallax="true">
          <div className="content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="section text-center landing-section">
            <div className="container">

              <div className="row">

              </div>
              <br /><br />
              <div className="row">
                <div className="col-md-3">
                  
                </div>
                <div className="col-md-3">
                  
                </div>
                <div className="col-md-3">
                
                </div>
                <div className="col-md-3">
                
                </div>
              </div>
            </div>
          </div>
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                   
                    {this.state.snowboards.map((eq, index) => 
                      <div key={index}>
                        <div className="card" data-background="image">
                          <img className="card-img" src= {eq.img} />
                          <div className="card-block">
                            <h6 className="card-category">{eq.brand}</h6>
                            <div className="card-icon">
                            </div>
                            <p className="card-description">{eq.name}</p>
                            <div className="card-footer">
                              <div className="btn btn-link btn-neutral"  onClick={() => this.handleClick(eq)}>
                              <i className="fa fa-book" aria-hidden="true"></i> Show more
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}  


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Snowboards;
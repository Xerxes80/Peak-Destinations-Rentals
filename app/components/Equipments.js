var React = require("react");
var Redirect = require("react-router");
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");

var Equipments = React.createClass({

  getInitialState: function() {

    return { 
             eqTarget: "",
             allEquipments: []
      		 };

  },
  componentDidMount: function() {
    helpers.getAll().then(function(results) {
      this.setState({ allEquipments: results.data });
      console.log("Data", this.state.allEquipments);
    }.bind(this));
  },

  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

  },

  renderContainer: function() {

    return(
      
      <div className="main-container">
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <br /><br />
                  <h3 className="text-center">Goggles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) =>
                      
                        (eq.category == "goggles") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                                <img className="cardImg" src={eq.icon} width="200px" height="100px"/>
                                
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Helmets</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                      (eq.category == "helmets") ? 
                      <div className="col-sm-6" key={index}>
                        <div className="card text-center">
                          <div className="card-body text-center">
                            <h4 className="card-title">{eq.brand}</h4>
                            <br /><br />
                            <div className="card-img">
                            <img className="cardImg " src={eq.icon}  height="100px"/>
                            
                            </div>
                            <br /><br />
                            <div className="card-footer" onClick={() => this.handleClick(eq)}>
                            
                              <p> {eq.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Poles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                        (eq.category == "poles") ? 
                        <div className="col-sm-6" key={index}> 
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg text-center" src={eq.icon} width="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}> 
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Skis</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                        (eq.category == "skis") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg " src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Snowboards</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                     
                        (eq.category == "snowboards") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg " src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Snowmobiles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) =>
                       
                        (eq.category == "snowmobiles") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title ">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg text-center" src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
  )
},
  
  renderEmpty: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
            <h2 className="text-center"><strong>No EQUIPMENTS</strong></h2>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    if(this.state.allEquipments !== "" ){
      return this.renderContainer();
    }

    return this.renderEmpty();
  }
});

module.exports = Equipments;

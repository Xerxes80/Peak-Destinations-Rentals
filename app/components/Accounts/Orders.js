var React = require("react");
var helpers = require("../../utils/helpers");
var Orders= React.createClass({


  getInitialState: function() {
    return {
      userId: "",
      reservations: []
    };
  },
  componentDidMount: function() {
   this.setState({userId: localStorage.getItem("id")});

    if (localStorage.getItem("id")){
      
      helpers.getRes(localStorage.getItem("id")).then(function(results) {
       
        if(results.data.length > 0){
          this.setState({reservations: results.data});
          console.log("reservations:  ", this.state.reservations);
        }
        
      }.bind(this));
    }
    
  },
  render: function() {

    return (
      <div className="">
       
        <div className="wrapper">
         
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                <hr /><br />
                    <div className="cartform profileRes">
                      <h3>Reservations</h3>
                      <br /><br />
                      <form >
                        <div className="profileReservation">
                          
                          {this.state.reservations.map((eq, index) =>
                            <div key={index} > 
                              <div className="card">
                                <div className="card-block">
                                  <img className="card-img"/>
                                  <div className="card-brand">
                                    <h6 className="card-category"></h6>
                                    
                                        
                                          <div className="row">
                                            <div className="col-8">
                                              <p className="carddescription"><strong>Name: </strong> {eq.firstName} {eq.lastName} </p>
                                              <p className="carddescription"><strong>Phone: </strong> {eq.phone}</p>
                                              <p className="carddescription"><strong>Email: </strong> {eq.email}</p>
                                              <p className="carddescription"><strong>Location: </strong> {eq.location}</p>
                                              <p className="carddescription"><strong>From: </strong>{eq.pickUp}</p>
                                              <p className="carddescription"><strong>To: </strong>{eq.dropOff}</p>
                                              <p className="carddImg"> <strong>Total Price: </strong> ${eq.total} </p>
                                            </div>
                                            <div className="col-4">
                                              
                                            </div>
                                            
                                          </div>
                                          <hr />
                                       
                                          <div className="cardfooter">
                                          </div>

                                  </div>

                                </div> 
                              </div>
                              <br />
                             </div>
                                 
                          )}
                          <br />
                          
                          
                        </div>
                        <hr />
                      </form>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Orders;
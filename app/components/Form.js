var React = require("react");


var Form = React.createClass({

  getInitialState: function() {
    return {
          pickUp: "",
          dropOff: "",
          firstName: "",
          LastName: "",
          email: "",
          phone: "",
          location: ""
    };
  },
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },
  handleReserve: function(event){
    event.preventDefault();
    console.log("Reserve CLICKED");
    console.log(this.props);
    this.props.Reserve(this.state.firstName, this.state.LastName, this.state.email, this.state.phone, this.state.pickUp, this.state.dropOff, this.state.location);
    this.setState({firstName: "", LastName: "", email: "", phone: "", pickUp: "", dropOff: "" });

  },

  render: function() {
 

    return (
      <div className="">
      <br /><br /><br /><br /><br />
        <div className="wrapper">
            <div className="container">
              <div className="">
                
                <div className="reserveForm">
                <h3>Begin Reservation</h3>
                <br /><hr /><br />
                  <form onSubmit={this.handleReserve}>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Pick Up Date:</label>
                        <input type="date" value={this.state.pickUp} className="form-control " onChange={this.handleChange} id="pickUp" required />
                      </div>
                      <div className="formgroup col-md-6">
                        <label >Drop Off Date:</label>
                        <input type="date" value={this.state.dropOff} className="form-control " onChange={this.handleChange} id="dropOff" required />
                      </div>
                      
                      <div className="formgroup col-md-12">
                      <br />
                        <label >Rental Location</label>
                        <select className="form-control"
                          id="location"
                          value={this.state.location} 
                          onChange={this.handleChange} >
                          <option value="Breckenridge - 75 Snowflake Dr, Breckenridge, CO 80424">
                            Breckenridge - 75 Snowflake Dr, Breckenridge, CO 80424
                          </option>
                          <option value="Vail -  675 Lionshead Pl, Vail, CO 81657">
                            Vail -  675 Lionshead Pl, Vail, CO 81657
                          </option>
                          <option value="Beaver Creek - 10 Elk Track Lane, Beaver Creek, CO 81620">
                            Beaver Creek - 10 Elk Track Lane, Beaver Creek, CO 81620
                          </option>
                          <option value="Aspen - 501 E. Dean St, Aspen, CO 81611">
                            Aspen - 501 E. Dean St, Aspen, CO 81611
                          </option>
                        </select>
                      </div>
                      <div className="formgroup col-md-6">
                        <br />
                        <div className="form-group">
                          <label >First Name</label>
                          <input type="text" value={this.state.firstName} className="form-control " onChange={this.handleChange} id="firstName"  required />
                        </div>
                      </div>
                      <div className="formgroup col-md-6">
                      <br />
                        <div className="form-group">
                          <label >Last Name</label>
                          <input type="text" value={this.state.LastName} className="form-control " onChange={this.handleChange} id="LastName"  required />
                        </div>
                      </div>
                      <div className="formgroup col-md-6">
                      <br />
                        <div className="form-group">
                          <label >Email Address</label>
                          <input type="text" value={this.state.email} className="form-control " onChange={this.handleChange} id="email"  required />
                        </div>
                      </div>
                      <div className="formgroup col-md-6">
                      <br />
                        <div className="form-group">
                          <label >Phone Number</label>
                          <input type="text" value={this.state.phone} className="form-control" onChange={this.handleChange} id="phone" required />
                        </div>
                      </div>
                      <div className="formgroup col-md-6">
                      <br />
                        <button type="submit" className="btn btn-primary col-md-6">Reserve</button>
                        <br />
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
                <div className="cart col-md-6">

                           
                </div>
              </div>
              <br />
            </div>
          
        </div>
      </div>  
    );
  }
});

module.exports = Form;
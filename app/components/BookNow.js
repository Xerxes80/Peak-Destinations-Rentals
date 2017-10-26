var React = require("react");
var Redirect = require("react-router");
var Link = require("react-router").Link;
var Form = require("./Form");
var Cart = require("./Accounts/Cart");
var helpers = require("../utils/helpers");

var BookNow = React.createClass({

  getInitialState: function() {
    return {
          userId: "",
          firstName: "",
          LastName: "",
          email: "",
          phone: "",
          pickUp: "",
          dropOff: "",
          location: "",
          items: [],
          reservations: [],
          total: 0,
          reserve: false,
          reserved: false,
          name: "",

    };
  },
 componentDidMount: function() {
  this.setState({userId: localStorage.getItem("id")});
  helpers.getProfile(localStorage.getItem("id")).then(function(results) {
       
        if(results.data.length > 0){
          this.setState({items: results.data[0].cart});

        }
      
      }.bind(this));

  },
  componentDidUpdate: function() {
    if(this.state.reserve){
      helpers.postRes(
                this.state.userId,
                this.state.firstName, 
                this.state.LastName, 
                this.state.email, 
                this.state.phone, 
                this.state.pickUp, 
                this.state.dropOff, 
                this.state.location,
                this.state.total,
                this.state.items
        ).then(function(cb) {
          
          helpers.updateCard(this.state.userId).then(function() {
            
          }.bind(this));
          this.setState({reserved: true, reserve: false});
      }.bind(this));
     // location.reload();
      console.log("reserved:  ", this.state.reserved, this.state.reserve);
    }
  },
  
  setReservation: function(firstName, LastName, email, phone, pickUp, dropOff, location) {
    this.setState({ firstName: firstName, LastName: LastName, email: email, phone: phone, pickUp: pickUp, dropOff: dropOff, location: location, reserve: true });
  },
  setCart: function(total){
    this.setState({ total: total});
  },

  render: function() {

    return (
      <div className="">
        <div className="text-center">
        
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-1">
            <Form Reserve={this.setReservation} />
          </div>
          <div className="col-md-5">
            <Cart Items={this.setCart} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BookNow;

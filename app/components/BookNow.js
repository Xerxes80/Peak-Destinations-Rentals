var React = require("react");
var Redirect = require("react-router");
var Link = require("react-router").Link;
var Form = require("./Form");
var Cart = require("./Accounts/Cart");
var helpers = require("../utils/helpers");

var BookNow = React.createClass({

  getInitialState: function() {
    return {
          pickUp: "",
          dropOff: "",
          firstName: "",
          LastName: "",
          email: "",
          phone: ""
    };
  },
 componentDidMount: function() {
  },
  componentDidUpdate: function() {
  
//     if (this.state.flag == 1) {
//         helpers.getUser().then(function(results) {
//       console.log(results);
//       console.log("email", this.state.email);
//       console.log("pass", this.state.password);
    
//     }.bind(this));
// }
//       if (this.state.flag == 0) {
//         if(this.state.signUpPass === this.state.signUpConfPass){
//           var userEmail = this.state.signUpPass;
//           var exists = false;
//           helpers.getUser().then(function(results) {
//             results.data.forEach(function(item){
//               if(item.email == userEmail){
//                  exists = true;
//               }
//             });
//             if(!exists){
//               helpers.postUser(this.state.signUpEmail, 
//                             this.state.signUpPass, 
//                             this.state.userName
//               ).then(function() {
//               this.setState({signUpMsg: "Signed Up Successfully !", flag: -1 });
//                 console.log(this.state.signUpMsg);
//                 alert("Successfully Signed In, Please Log In");
//               }.bind(this));
//             }else{
//               this.setState({signUpMsg: "Email is Already exists !", flag: -1 });
//               console.log(this.state.signUpMsg);
//             };
//           }.bind(this));  
//         }else{
//             this.setState({signUpMsg: "Passwords Do Not Match ! Try Again", flag: -1 });
//             console.log(this.state.signUpMsg);
//         };
//       }
  },
  
  setReservation: function(firstName, LastName, email, phone, pickUp, dropOff, location) {
    this.setState({ firstName: firstName, LastName: LastName, email: email, phone: phone, pickUp: pickUp, dropOff: dropOff, location: location });
  },
  render: function() {

    return (
      <div className="">
        <div className="text-center">
          <br /><br /><br />
        <h2></h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form Reserve={this.setReservation} />
          </div>
          <div className="col-md-6">
            <Cart Items={this.setCart} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BookNow;

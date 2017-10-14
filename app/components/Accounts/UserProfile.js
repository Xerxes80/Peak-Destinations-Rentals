var React = require("react");
var SignUp = require("./SignUp");
var SignIn = require("./SignIn");
var helpers = require("../../utils/helpers");
var UserProfile= React.createClass({

  getInitialState: function() {
    return { 
            email: "", 
            password: "", 
            userName: "", 
            signUpEmail: "", 
            signUpPass: "",
            signUpConfPass: "",
            signUpMsg: "",
            signInMsg: "",
            info: "",
            flag: -1
    };
  },
  componentDidMount: function() {
  },
  componentDidUpdate: function() {
  
    if (this.state.flag == 1) {
        helpers.getUser().then(function(results) {
      console.log(results);
      console.log("email", this.state.email);
      console.log("pass", this.state.password);
    
    }.bind(this));
}
      if (this.state.flag == 0) {
        if(this.state.signUpPass === this.state.signUpConfPass){
          var userEmail = this.state.signUpPass;
          var exists = false;
          helpers.getUser().then(function(results) {
            results.data.forEach(function(item){
              if(item.email == userEmail){
                 exists = true;
              }
            });
            if(!exists){
              helpers.postUser(this.state.signUpEmail, 
                            this.state.signUpPass, 
                            this.state.userName
              ).then(function() {
              this.setState({signUpMsg: "Signed Up Successfully !", flag: -1 });
                console.log(this.state.signUpMsg);
                alert("Successfully Signed In, Please Log In");
              }.bind(this));
            }else{
              this.setState({signUpMsg: "Email is Already exists !", flag: -1 });
              console.log(this.state.signUpMsg);
            };
          }.bind(this));  
        }else{
            this.setState({signUpMsg: "Passwords Do Not Match ! Try Again", flag: -1 });
            console.log(this.state.signUpMsg);
        };
      }
  },
  setLogIn: function(email, password, flag) {
    this.setState({ email: email, password: password, flag: 1});
  },
  setSignUp: function(email, password, confPass, username, flag) {
    this.setState({ signUpEmail: email, signUpPass: password, signUpConfPass:confPass, userName: username, flag: 0});
  },
  render: function() {

    return (
      <div className="">
       <div className="text-center">
        <br /><br /><br /><br /><br />
       <h2>{this.state.signUpMsg}</h2>
       </div>
        <div className="row">
          <div className="col-md-6">
            <SignIn signIn={this.setLogIn} />
          </div>
          <div className="col-md-6">
            <SignUp signUp={this.setSignUp} />
          </div>
        </div>
          
      </div>
    );
  }
});

module.exports = UserProfile;

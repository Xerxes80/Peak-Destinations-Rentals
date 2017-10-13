var React = require("react");
var SignUp = require("./SignUp");
var SignIn = require("./SignIn");
var helpers = require("../../utils/helpers");
//<UserLog setLogin={this.setLogin} />
var UserProfile= React.createClass({


  getInitialState: function() {
    return { 
            email: "", 
            password: "", 
            userName: "", 
            signUpEmail: "", 
            signUpPass: "",
            msg: "",
            info: ""
    };
  },
  componentDidMount: function() {
    
    helpers.getUser(email, password).then(function(response) {
      console.log(response);
      if (response.email !== this.state.email || response.password !== this.state.password) {
        console.log("email or Password are not match!");
        this.setState({ msg: "Username or Password are not match!" });
      }else{
        helpers.getHistory().then(function(response) {
          console.log("Current User", response.data);

          this.setState({ info: response.data });

        }.bind(this));
        this.setState({ msg: response.username });
      }
    }.bind(this));
  },
  componentDidUpdate: function() {

    console.log(this.state.email, this.state.password);
    console.log(this.state.signUpEmail, this.state.signUpPass, this.state.userName);
    
    helpers.runQuery(this.state.signUpemail).then(function(data) {
      if (data.email !== this.state.signUpemail) {
        console.log("Email is already existing", data);
        this.setState({ msg: "Email is already existing, Please try again"});
      }else{
        helpers.postUser(this.state.signUpemail, 
                        this.state.signUpPass, 
                        this.state.userName
          ).then(function() {
          console.log("Signed Up Successfully!");

        }.bind(this));
      }
    }.bind(this));
  },
  setLogIn: function(email, password) {
    this.setState({ email: email, password: password});
    
  },
  setSignUp: function(email, password, username) {
    console.log("ok");
    this.setState({ signUpEmail: email, signUpPass: password, userName: username});
    
  },
  render: function() {

    return (
      <div className="">
        <div className="page-header profile" data-parallax="true">
          <div className="content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                </div>
              </div>
            </div>
          </div>
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

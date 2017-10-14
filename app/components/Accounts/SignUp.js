var React = require("react");

var helpers = require("../../utils/helpers");


var SignUp= React.createClass({


  getInitialState: function() {
    return {
        email: "",
        password: "",
        confPass: "",
        userName: ""
  
    };
  },
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
  handleSignUp: function(event){
    event.preventDefault();
    console.log("sign up CLICKED");

    console.log(this.props);
    this.props.signUp(this.state.email, this.state.password, this.state.confPass, this.state.userName);
    this.setState({ email: "", password: "", confPass: "", userName: ""});

  },

  render: function() {

    return (
      <div className="">
        
        <div className="wrapper">

            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="">
                    <div className="">
                      <div className="signupform profile">
                        <h3>Register</h3>
                        <br /><br />
                        <div className="signUp-form">
                        <form onSubmit={this.handleSignUp}>
                          <div className="signUpform">
                            <h6 className="">
                              Email
                            </h6>
                            <input
                              type="email"
                              value={this.state.email}
                              className="form-control text-center"
                              id="email"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                            <h6 className="">
                              Password
                            </h6>
                            <input
                              type="text"
                              value={this.state.password}
                              className="form-control text-center"
                              id="password"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                            <h6 className="">
                              Confirm password
                            </h6>
                            <input
                              type="text"
                              value={this.state.confPass}
                              className="form-control text-center"
                              id="confPass"
                              onChange={this.handleChange}
                              required
                            />
                            <br />
                            <h6 className="">
                              UserName
                            </h6>
                            <input
                              type="text"
                              value={this.state.userName}
                              className="form-control text-center"
                              id="userName"
                              onChange={this.handleChange}
                              required
                            />
                            <div>
                            <br />
                              <button type="submit" className="btn btn-danger"> Sign Up</button>

                            </div>
                            <br /><br />
                            </div>
                          </form>

                          
                        </div>
                      </div>
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

 module.exports = SignUp;

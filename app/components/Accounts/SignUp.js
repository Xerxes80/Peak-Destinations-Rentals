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
    this.props.signUp(this.state.email, this.state.password, this.state.userName);
    this.setState({ email: "", password: "", userName: ""});

  },

  render: function() {

    return (
      <div className="">
        
        <div className="wrapper">
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h1>Test Authentication 🚀 </h1>
                  <div className="">
                    <div className="">
                      <div className="signupform profile">
                        <h3>Register</h3>
                        <div className="signUp-form">
                        <h3>sign up</h3>
                        <form onSubmit={this.handleSignUp}>
                          <div className="loginform">
                            <h4 className="">
                              <strong>email</strong>
                            </h4>
                            <input
                              type="text"
                              value={this.state.email}
                              className="form-control text-center"
                              id="email"
                              onChange={this.handleChange}
                              required
                            />
                            <h4 className="">
                              <strong>password</strong>
                            </h4>
                            <input
                              type="text"
                              value={this.state.password}
                              className="form-control text-center"
                              id="password"
                              onChange={this.handleChange}
                              required
                            />
                            <h4 className="">
                              <strong>password</strong>
                            </h4>
                            <input
                              type="text"
                              value={this.state.confPass}
                              className="form-control text-center"
                              id="confPass"
                              onChange={this.handleChange}
                              required
                            />
                            <h4 className="">
                              <strong>userName</strong>
                            </h4>
                            <input
                              type="text"
                              value={this.state.userName}
                              className="form-control text-center"
                              id="userName"
                              onChange={this.handleChange}
                              required
                            />
                            <div>
                              <button type="submit" className="btn btn-danger"> "sign up"</button>
                            </div>
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
      </div>
    );
  }
});

 module.exports = SignUp;

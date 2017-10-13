var React = require("react");

var helpers = require("../../utils/helpers");


var SignIn= React.createClass({


  getInitialState: function() {
    return {
        email: "",
        password: ""
    };
  },
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSignIn: function(event){
    event.preventDefault();
    console.log(this.props);
    console.log("sign in CLICKED");
    this.props.signIn(this.state.email, this.state.password);
    this.setState({ email: "", password: ""});
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
                      <div className="signinform profile">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSignIn}>
                          <div className="signUpForm">
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
                            <div>
                              <button type="submit" className="btn btn-danger"> "LogIN"</button>
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
     
    );
  }
});

 module.exports = SignIn;

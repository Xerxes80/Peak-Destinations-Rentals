var React = require("react");
var SignUp = require("./SignUp");
var SignIn = require("./SignIn");
var helpers = require("../../utils/helpers");
var UserProfile= React.createClass({

  getInitialState: function() {
    return { 
            name: "",
            email: "", 
            password: "", 
            userName: "", 
            signUpEmail: "", 
            signUpPass: "",
            signUpConfPass: "",
            signUpMsg: "",
            signInMsg: "",
            info: "",
            userId: "",
            profileEmail: "",
            userCart: [],
            userReservation: [],
            reservations: [],
            signed: false,
            flag: -1
    };
  },
  componentDidMount: function() {
   this.setState({userId: localStorage.getItem("id")});

    if (localStorage.getItem("id")){
      helpers.getProfile(localStorage.getItem("id")).then(function(results) {
       
         if(results.data.length > 0){
           
          this.setState({profileEmail: results.data[0].email, 
                        name: results.data[0].username, 
                       // userCart: results.data[0].cart, 
                        // userReservation: results.data[0].reservation
          });
             
         }
      }.bind(this));
      helpers.getRes(localStorage.getItem("id")).then(function(results) {
       
        if(results.data.length > 0){
          this.setState({reservations: results.data});
          console.log("reservations:  ", this.state.reservations);
        }
        
      }.bind(this));
    }
    
  },
  componentDidUpdate: function() {
  console.log("begin", this.state.flag);
    if (this.state.flag == 1) {
      helpers.getUser(this.state.email, this.state.password).then(function(results) {
       
       if(results.data.length > 0){
         
          this.setState({userId: results.data[0]._id, name: results.data[0].username, signed: true});
          this.setState({signUpMsg: "Signed in Successfully ! "+this.state.name , flag: -1 });
          this.setState({profileEmail: results.data[0].email, 
                        name: results.data[0].username, 
                        userCart: results.data[0].cart, 
                        userReservation: results.data[0].reservation})
          
       }else{
    
         this.setState({signUpMsg: "Wrong email or password !", flag: -1 });
       }
      localStorage.setItem("id", this.state.userId);
      localStorage.setItem("username", this.state.userId);
      let theId = localStorage.getItem("id");
      }.bind(this));
       this.setState({flag: -1});
      
  }

if (this.state.flag == 0) {
  helpers.getEmail(this.state.signUpEmail).then(function(results) {

       if(results.data.length > 0){
        
         this.setState({signUpMsg: "Email is already exist !", flag: -1 });
         this.setState({flag: -1});
       }else{
          helpers.postUser(this.state.signUpEmail, 
                            this.state.signUpPass, 
                            this.state.userName
              ).then(function(cb) {
              this.setState({signUpMsg: "Signed Up Successfully !", userId: cb.data._id, signed: true,  flag: -1 });

                localStorage.setItem("id", cb.data._id);
              }.bind(this));
       }
       
      }.bind(this));
      this.setState({flag: -1});
  }
  },
  handleLogOut: function(){
     localStorage.removeItem("id");
     localStorage.removeItem("username");
     location.reload();
  },
  setLogIn: function(email, password, flag) {
    this.setState({ email: email, password: password, flag: 1});
  },
  setSignUp: function(email, password, confPass, username, flag) {
    this.setState({ signUpEmail: email, signUpPass: password, signUpConfPass:confPass, userName: username, flag: 0});
  },
  renderProfile: function() {
    return (
      <div className="">
        <div className="container">
            <br /><br /><br /><br /><br /><br /><br />
              <div className="row">
                <div className="col-md-8 offset-md-1">
      
                    <div className="signinform profile">
                      <h3>Your Profile</h3>
                      <br /><br />
                      <form className="row">
                        <div className="profile col-md-5 offset-md-1">
                          <label className="profile"><strong>Email: </strong></label> {this.state.profileEmail}
                            
                          <br />
                          <br />
                          <label className="profile"><strong>User Name: </strong></label> {this.state.name}
                          <br />
                        </div>
                        <div className="profile col-md-3 offset-md-3">
                          
                          <button className="btn btn-danger" onClick={() => this.handleLogOut()}>Log Out</button>
                          <br />
                        </div>
                      </form>
                    </div>
                </div> 
               
                
                
              </div>
              <br /><br />
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
    );
  },
  renderLog: function(){
    return(
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
    )
  },
  render: function() {
    
    if (this.state.userId) {
      return this.renderProfile();
    }
    
    return this.renderLog();
  }
});

module.exports = UserProfile;

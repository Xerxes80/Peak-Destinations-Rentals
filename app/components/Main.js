var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  getInitialState: function() {
    return {
      logo : "./assets/images/winterlogo.png"
    };
  },
  render: function() {

    return (
      <div className="">
        <div className="">
          <nav className="navbar navbar-toggleable-md fixed-top bg-success navbar-transparent">
            <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
            </button>
            <div className="col-xs-6  col-sm-3 col-md-2 offset-md-1">
              <img src={this.state.logo} className="img-rounded img-no-padding img-responsive" alt="Rounded Image"/>   
              </div>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/BookNow">Book Now</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Equipments">Equipments</Link>
                      <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                              <li className="dropdown-item"><Link to="/Equipments"><i className="nc-icon nc-bullet-list-67"></i>&nbsp; All Equipments</Link></li>
                              <li className="dropdown-item"><Link to="/Goggles"><i className="nc-icon nc-glasses-2"></i>&nbsp; Goggles</Link></li>
                              <li className="dropdown-item"><Link to="/Helmets"><i className="nc-icon nc-hat-3"></i>&nbsp; Helmets</Link></li>
                              <li className="dropdown-item"><Link to="/Poles"><i className="nc-icon nc-vector"></i>&nbsp; Poles</Link></li>
                        <li className="dropdown-item"><Link to="/Skis"><i className="nc-icon nc-delivery-fast"></i>&nbsp; Snow Skis</Link></li>
                        <li className="dropdown-item"><Link to="/Snowboards"><i className="nc-icon nc-settings"></i>&nbsp; Snow Boards</Link></li>
                        <li className="dropdown-item"><Link to="/Snowmobiles"><i className="nc-icon nc-bullet-list-67"></i>&nbsp; Snowmobiles</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/AboutUs" >About Us</Link>
                    </li>
                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Account" >MyAccount</Link>
                          <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                              <li className="dropdown-item"><a href="../sections.html#blogs"><i className="nc-icon nc-glasses-2"></i>&nbsp; Sign In</a></li>
                              <li className="dropdown-item"><a href="../sections.html#blogs"><i className="nc-icon nc-hat-3"></i>&nbsp; Sign Out</a></li>
                              <li className="dropdown-item"><a href="../sections.html#blogs"><i className="nc-icon nc-vector"></i>&nbsp; Orders</a></li>
                              <li className="dropdown-item"><a href="../sections.html#headers"><i className="nc-icon nc-delivery-fast"></i>&nbsp; Profile</a></li>
                              <li className="dropdown-item"><a href="../sections.html#features"><i className="nc-icon nc-settings"></i>&nbsp; Cart</a></li>
                          </ul>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>

            {this.props.children}

            <footer className="footer section-dark">
              <div className="container">
                <div className="row">
                  <nav className="footer-nav">
                  </nav>
                  <div className="credits ml-auto">
                    <span className="copyright">
                      © <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> finalprojectgroup01 SMU BOOTCAMP
                    </span>
                  </div>
                </div>
              </div>
            </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;

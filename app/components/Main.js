var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  getInitialState: function() {
    return {
      logo : "./assets/images/winterlogo_50p.png",
      gogglesIcon : "./assets/images/007-goggles.png",
      hemlmetsIcon: "./assets/images/006-helmet.png",
      polesIcon: "./assets/images/011-poles.png",
      skisIcon : "./assets/images/010-sports.png",
      snowboardsIcon: "./assets/images/009-snowboard.png",
      snowmobilesIcon: "./assets/images/008-snowmobile.png",
      allEqpIcon: "./assets/images/003-list.png",
      logInIcon: "./assets/images/id-card.png",
      ordersIcon: "./assets/images/003-list.png",
      profileIcon: "./assets/images/002-profile.png",
      cartIcon: "./assets/images/001-shopping-cart.png"
    };
  },
  render: function() {

    return (
      <div className="">
        
          <div className="navbar navbar-toggleable-md fixed-top navNewColor">
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
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Equipments">Equipment</Link>
                    <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                        <li className="dropdown-item"><Link to="/Equipments"><img src={this.state.allEqpIcon}/><i className="dropLogo"> </i>&nbsp; All Equipment</Link></li>
                        <li className="dropdown-item"><Link to="/Goggles"><img src={this.state.gogglesIcon}/><i className="dropLogo"> </i>&nbsp; Goggles</Link></li>
                        <li className="dropdown-item"><Link to="/Helmets"><img src={this.state.hemlmetsIcon}/><i className="dropLogo"> </i>&nbsp; Helmets</Link></li>
                        <li className="dropdown-item"><Link to="/Poles"><img src={this.state.polesIcon}/><i className="dropLogo"> </i>&nbsp; Poles</Link></li>
                        <li className="dropdown-item"><Link to="/Skis"><img src={this.state.skisIcon}/><i className="dropLogo"></i>&nbsp; Snow Skis</Link></li>
                        <li className="dropdown-item"><Link to="/Snowboards"><img src={this.state.snowboardsIcon}/><i className="dropLogo"> </i>&nbsp; Snow Boards</Link></li>
                        <li className="dropdown-item"><Link to="/Snowmobiles"><img src={this.state.snowmobilesIcon}/><i className="dropLogo"> </i>&nbsp; Snowmobiles</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/Account" >MyAccount</Link>
                      <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                          
                          <li className="dropdown-item"><Link to="/UserProfile"><img src={this.state.logInIcon}/><i className="dropLogo"> </i>&nbsp; Login/Register</Link></li>
                          <li className="dropdown-item"><Link to="/Orders"><img src={this.state.ordersIcon}/><i className="dropLogo"> </i>&nbsp; Orders</Link></li>
                          <li className="dropdown-item"><Link to="/UserProfile"><img src={this.state.profileIcon}/><i className="dropLogo"> </i>&nbsp; Profile</Link></li>
                          <li className="dropdown-item"><Link to="/Cart"><img src={this.state.cartIcon}/><i className="dropLogo"> </i>&nbsp; Cart</Link></li>
                      </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

              {this.props.children}

          <footer className="footer section-dark content-center text-center">
          <hr />
            <div className="content-center text-center">
              <div className="landingPageLogo" >
                <img src="./assets/images/winterlogo_35p.png" className="img-rounded img-no-padding img-responsive" alt="Rounded Image"/>
              </div>
              <div className="credits ml-auto">
                <span className="copyright">
                  © <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> finalprojectgroup01 SMU BOOTCAMP
                </span>
              </div>
            </div>
            <br /><br />
          </footer>


        
      </div>
    );
  }
});

module.exports = Main;

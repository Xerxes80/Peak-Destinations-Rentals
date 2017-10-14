var React = require("react");
var Link = require("react-router").Link;
var Home = React.createClass({

getInitialState: function() {
  return {
  };
},

render: function() {

  return (
    <div className="">
      <div className="page-header" data-parallax="true">
        <div className="content-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card card-raised page-carousel">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item">
                        <img className="d-block img-fluid" src='./assets/images/slide1.png' alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                      </div>
                      <div className="carousel-item active">
                          <img className="d-block img-fluid" src='./assets/images/slide2.png' alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                           
                        </div>
                      </div>
                      <div className="carousel-item">
                          <img className="d-block img-fluid" src='./assets/images/slide3.png'alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                           
                        </div>
                      </div>
                    </div>

                    <a className="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="fa fa-angle-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="fa fa-angle-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div>
                      <h1 className="quote">Ski Snowboard Snowmobile Rentals</h1>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="section text-center landing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="title">Let’s talk gear!</h2>
                <h5>Whether you’re on a trip with the family in Aspen or an offseason pro in Beaver Creek looking for a great time with friends, we have your equipment needs covered. Check out the below to see our selection of great brands for every skill level.</h5>
                <br />
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <Link to="/Skis">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="orange" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/011-sportslrg.png"/></div>
                      <h2 className="card-category">Skis</h2>
                      <div className="cardTextContainer">
                        <h4 className="card-title">Carve out the ride of a lifetime in a pair of our top quality skis</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/Snowboards">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="purple" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/010-snowboardlrg.png"/></div>
                      <h2 className="card-category">Snowboards</h2>
                      <div className="cardTextContainer">
                        <h4 className="card-title">Channel your inner daredevil and go big or go home on one of these beautiful boards</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/Snowmobiles">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="brown" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/009-snowmobilelrg.png"/></div>
                      <h2 className="card-category">Snowmobile</h2>
                      <div className="cardTextContainer">
                        <h4 className="card-title">Mad action on the slopes not your thing? Enjoy your time in the powder with our hourly snowmobile rentals</h4>
                      </div>
                    </div>
                  </div> 
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/Goggles">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="yellow" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/008-goggleslrg.png"/></div>
                        <h2 className="card-category">Goggles</h2>
                        <div className="cardTextContainer">
                          <h4 className="card-title">See life with new perspective and improve performance with our great assortment of goggles</h4>
                        </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="/Helmets">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="green" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/007-helmetlrg.png"/></div>
                      <h2 className="card-category">Helmets</h2>
                      <div className="cardTextContainer">
                        <h4 className="card-title">Protect your skully with our crashworthy helmets. Safe enough to make mom proud</h4>
                      </div>
                    </div>
                  </div> 
                </Link>
              </div>   
              <div className="col-lg-4 col-md-6">
                <Link to="/Poles">
                  <div className="card card-just-text card-with-shadow" data-background="color" data-color="blue" >
                    <div className="card-block">
                      <div className="equipmentLogo"><img src="./assets/images/001-poleslrg.png"/></div>
                      <h2 className="card-category">Poles</h2>
                      <div className="cardTextContainer">
                        <h4 className="card-title">Simple enough, but they’ll keep you on course</h4>
                      </div>
                    </div>
                  </div> 
                </Link>
              </div>
            </div>
          </div>
          <div className="section section-dark text-center landing-section">
            <div id="snow">
            </div>
            <div className="container">
              <h2 className="title">Let's talk about us</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar"><img src="./assets/images/spiderman.png" alt="..."/></a>
                    </div>
                    <div className="card-block">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Tyler Lackey</h4>
                          <h6 className="card-category text-muted">Full Stack Developer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar"><img src="./assets/images/storm.png" alt="..."/></a>
                    </div>
                    <div className="card-block">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Jessica Peters</h4>
                          <h6 className="card-category text-muted">Full Stack Developer</h6>
                        </div>
                      </a>
                        <p className="card-description text-center">
                        </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar"><img src="./assets/images/hulk.png" alt="..."/></a>
                    </div>
                    <div className="card-block">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Tony Rios</h4>
                          <h6 className="card-category text-muted">Full Stack Developer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar"><img src="./assets/images/iron-man.png" alt="..."/></a>
                    </div>
                    <div className="card-block">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Kevin Tabesh</h4>
                          <h6 className="card-category text-muted">Full Stack Developer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#avatar"><img src="./assets/images/Rogue.png" alt="..."/></a>
                    </div>
                    <div className="card-block">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Niki Tidmore</h4>
                          <h6 className="card-category text-muted">Full Stack Developer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h2 className="text-center">Keep in touch?</h2>
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                        <input className="form-control" placeholder="Name"/>
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                        <input className="form-control" placeholder="Email"/>
                      </div>
                    </div>
                    <label>Message</label>
                    <textarea className="form-control" rows="4" placeholder="Tell us your thoughts and feelings..."></textarea>
                    <div className="row">
                      <div className="col-md-4 offset-md-4">
                        <button className="btn btn-danger btn-lg btn-fill">Send Message</button>
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
  );
}
});

module.exports = Home;

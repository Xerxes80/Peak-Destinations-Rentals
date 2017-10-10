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
                        <h2 className="title">Let's talk product</h2>
                        <h5>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                        <br />
                       
                    </div>
                </div>
        <br /><br />
        <div className="row">
   <div className="col-md-4 col-sm-4">
    <Link to="/Skis">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="orange" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/011-sportslrg.png"/></div>
               <h2 className="card-category">Snow Skis</h2>
               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div>
    </Link>
   </div>
   <div className="col-md-4 col-sm-4">
      <Link to="/Snowboards">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="purple" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/010-snowboardlrg.png"/></div>
               <h2 className="card-category">Snowboards</h2>
               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div>
      </Link>
   </div>
   <div className="col-md-4 col-sm-4">
      <Link to="/Snowmobiles">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="brown" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/009-snowmobilelrg.png"/></div>
               <h2 className="card-category">Snowmobile</h2>
               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div> 
      </Link>
   </div>
      <div className="col-md-4 col-sm-4">
      <Link to="/Goggles">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="yellow" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/008-goggleslrg.png"/></div>
               <h2 className="card-category">Goggles</h2>
               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div>
       </Link>
   </div>

      <div className="col-md-4 col-sm-4">
      <Link to="/Helmets">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="green" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/007-helmetlrg.png"/></div>
               <h2 className="card-category">Helemts</h2>
               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div> 
       </Link>
   </div>   
      <div className="col-md-4 col-sm-4">
      <Link to="/Poles">
       <div className="card card-just-text card-with-shadow" data-background="color" data-color="blue" >
           <div className="card-block">
            <div className="equipmentLogo"><img src="./assets/images/001-poleslrg.png"/></div>
               <h2 className="card-category">Poles</h2>

               <h4 className="card-title">"The more you know who you are and what you want, the less you let things upset you."</h4>
               <p className="card-description">- Your card</p>
           </div>
       </div> 
       </Link>
   </div>
            </div>
        </div>

        <div className="section section-dark text-center landing-section">
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
                                Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.
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
                                A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.
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
                                The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.
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
                                The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.
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
                                The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.
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

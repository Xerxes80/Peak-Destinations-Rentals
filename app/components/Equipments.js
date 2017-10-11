var React = require("react");
var Redirect = require("react-router");
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");

var Equipments = React.createClass({

  getInitialState: function() {

    return { 
             eqTarget: "",
             allEquipments: []
      		 };

  },
  componentDidMount: function() {
    helpers.getAll().then(function(results) {
      this.setState({ allEquipments: results.data });
      console.log("Data", this.state.allEquipments);
    }.bind(this));
  },

  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

  },

  renderContainer: function() {

    return(
      
      <div className="main-container">
        <div className="page-header" data-parallax="true">
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
            <div className="col-lg-12">
              <div className="jumbotron">
               <h2 className="text-center"><strong>ALL EQUIPMENTS</strong></h2>
              </div>
              <hr />
            </div>
          </div>
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <br /><br />
                  <h3 className="text-center">Goggles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) =>
                      
                        (eq.category == "goggles") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                                <img className="cardImg" src={eq.icon} width="200px" height="100px"/>
                                
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Helmets</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                      (eq.category == "helmets") ? 
                      <div className="col-sm-6" key={index}>
                        <div className="card text-center">
                          <div className="card-body text-center">
                            <h4 className="card-title">{eq.brand}</h4>
                            <br /><br />
                            <div className="card-img">
                            <img className="cardImg " src={eq.icon} width="200px" height="100px"/>
                            
                            </div>
                            <br /><br />
                            <div className="card-footer" onClick={() => this.handleClick(eq)}>
                            
                              <p> {eq.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Poles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                        (eq.category == "poles") ? 
                        <div className="col-sm-6" key={index}> 
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg text-center" src={eq.icon} width="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}> 
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Skis</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                      
                        (eq.category == "skis") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg " src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Snowboards</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) => 
                     
                        (eq.category == "snowboards") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg " src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>
                  <br /><br />
                  <h3 className="text-center">Snowmobiles</h3>
                  <hr />
                  <br /><br />
                  <div className="row">
                    {this.state.allEquipments.map((eq, index) =>
                       
                        (eq.category == "snowmobiles") ? 
                        <div className="col-sm-6" key={index}>
                          <div className="card text-center">
                            <div className="card-body text-center">
                              <h4 className="card-title ">{eq.brand}</h4>
                              <br /><br />
                              <div className="card-img">
                              <img className="cardImg text-center" src={eq.icon} height="100px"/>
                              <br />
                              </div>
                              <br /><br />
                              <div className="card-footer" onClick={() => this.handleClick(eq)}>
                              
                                <p> {eq.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        : null
                      
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
  )
},
  
  renderEmpty: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
            <h2 className="text-center"><strong>No EQUIPMENTS</strong></h2>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    if(this.state.allEquipments !== "" ){
      return this.renderContainer();
    }

    return this.renderEmpty();
  }
});

module.exports = Equipments;

//
// handleClick: function(item) {
//     console.log("clicked");
//     console.log();
//     this.setState({eqTarget: })
    


//                    <div>
          //           {this.state.allEquipments.map((eq, index) => 
                      
          //             <div key={index}>
                          
          //                 <div className="card text-white bg-Success mb-3">
          //                   <div className="card-header text-center">{index+1} . {eq.name}</div>
          //                   <div className="card-body">
          //                     <h4 className="card-title">{eq.img} card title</h4>
          //                     <p className="card-text">{eq.brand}</p>
          //                   </div>
          //                 </div>
                        
          //             </div>
                      
                
                  
          //          </div>
          //            })
          //     </div>
          //   </div>
          // </div>
          // )


//     // <Redirect to = {{pathname: '/Goggles'}} />
//   },
// <div className="main-container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="jumbotron">
//                  <h2 className="text-center"><strong>EQUIPMENTS</strong></h2>
//                 </div>
//                  <hr />
//                   <div>
//                     {this.state.allEquipments.map((eq, index) => 
                      
//                       <div key={index}>
//                            <Link to={"/"+eq.title}>
//                           <div className="card text-white bg-Success mb-3" onClick={() => this.handleClick(eq.title)}>
//                             <div className="card-header text-center">{index+1} . {eq.title}</div>
//                             <div className="card-body">
//                               <h4 className="card-title">{eq.img} card title</h4>
//                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             </div>
//                           </div>
//                           </Link>
//                       </div>
                      
//                     )}
                  
//                 </div>
//               </div>
//             </div>
//           </div>




// <div className="card" data-background="image" key={index} >
//                       <div className="card bg-dark text-white">
//                         <h6 className="card-category">{eq.category}</h6>
//                         <div className="card-img-overlay" >{eq.name}
//                         </div>
//                         <img className="card-img" src={eq.icon}/>
//                         <p className="card-brand">{eq.brand}</p>
//                         <p className="card-description">{eq.desc}</p>
//                         <div className="card-footer">
//                           <a href="#pablo" className="btn btn-link btn-neutral">
//                           <i className="fa fa-book" aria-hidden="true">Show More</i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>

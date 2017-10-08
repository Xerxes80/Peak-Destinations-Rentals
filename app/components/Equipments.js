var React = require("react");
var Redirect = require("react-router");
var Link = require("react-router").Link;
var Goggles = require("./equipments/Goggles");
var Helmets = require("./equipments/Helmets");
var Poles = require("./equipments/Poles");
var Skis = require("./equipments/Skis");
var Snowboards = require("./equipments/Snowboards");
var Snowmobiles = require("./equipments/Snowmobiles");

var Equipments = React.createClass({

  getInitialState: function() {

    return { 
             eqs:[
               {title: "Goggles", img: "bg-primary", desc: ""},
          		 {title: "Helmets", img: "bg-Secondary", desc: ""},
          		 {title: "Poles", img: "bg-Success", desc: ""},
          		 {title: "Skis", img: "bg-Danger", desc: ""},
          		 {title: "Snowboards", img: "bg-Warning", desc: ""},
          		 {title: "Snowmobiles", img: "bg-Info", desc: ""}
             ],
             eqTarget: ""
      		 };

  },
  handleClick: function(item) {
    console.log("clicked");
    console.log(item);
    this.setState({eqTarget: item})
    
    // <Redirect to = {{pathname: '/Goggles'}} />
  },
  renderCategory: function() {

    return(<div className="main-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="jumbotron">
                 <h2 className="text-center"><strong>EQUIPMENTS</strong></h2>
                </div>
                 <hr />
                  <div>
                    {this.state.eqs.map((eq, index) => 
                      
                      <div key={index}>
                           <Link to={"/"+eq.title}>
                          <div className="card text-white bg-Success mb-3" onClick={() => this.handleClick(eq.title)}>
                            <div className="card-header text-center">{index+1} . {eq.title}</div>
                            <div className="card-body">
                              <h4 className="card-title">{eq.img} card title</h4>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                          </div>
                          </Link>
                      </div>
                      
                    )}
                  
                </div>
              </div>
            </div>
          </div>)
      
  },
  renderTarget: function() {
    return(
    <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
            <h2 className="text-center"><strong>{this.state.eqTarget}</strong></h2>
            </div>
            
                <page />
            
          </div>
        </div>
      </div>
      );
  },
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
            <h2 className="text-center"><strong>EQUIPMENTS</strong></h2>
            </div>
            
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    if(this.state.eqTarget !== "" ){
      return this.renderTarget(this.state.eqTarget);
    }

    return this.renderCategory();
  }
});

module.exports = Equipments;

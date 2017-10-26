var React = require("react");
var helpers = require("../../utils/helpers");

var Helmets = React.createClass({

  getInitialState: function() {
    return {
        helmets: []
    };
  },
  componentDidMount: function() {
    helpers.getAll().then(function(results) {
      var newArray =[];
      for (var i=0; i<results.data.length; i++){
        (results.data[i].category == "helmets") ? 
        newArray.push(results.data[i]) : null
      }
      this.setState({ helmets: newArray });
      console.log("Data", this.state.helmets);
    }.bind(this));
  },

  handleClick: function(item) {
    console.log("item CLICKED");
    console.log(item);
    
    var userId = localStorage.getItem("id");
    var itemId = item._id;
    console.log("1", userId, itemId);
    helpers.postCart(userId, itemId).then(function() {
 
    }.bind(this));
  },
  
  render: function() {
 

    return (
      <div className="">
       
        <div className="wrapper">
          
          <div className="section landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                   <h3 className="text-center">Helmets</h3>
                   <br /> <hr /> <br />
                    {this.state.helmets.map((eq, index) => 
                      <div key={index}>
                        <div className="card" data-background="image">
                          <div className="card-block">
                            <img className="card-img" src= {eq.img} />
                            <div className="card-brand">
                            <h6 className="card-category">{eq.brand}</h6>
                            </div>
                            <p className="card-description">{eq.name}</p>
                            <div className="desc">
                              <p className="card-description">{eq.desc}</p>
                            </div>
                            <div className="desc">
                              <p className="card-description"><strong>${eq.price} /Day</strong></p>
                            </div>
                            <div className="card-footer">
                              <div className="btn btn-link btn-neutral"  onClick={() => this.handleClick(eq)}>
                              <i className="fa fa-book" aria-hidden="true"></i> Add To Cart
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Helmets;
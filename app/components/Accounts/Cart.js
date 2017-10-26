var React = require("react");
var helpers = require("../../utils/helpers");
var Cart= React.createClass({


  getInitialState: function() {
    return {
        allItems: [],
        allEquipments: [],
        cart:[],
        total: 0
    };
  },
  componentDidMount: function() {
    helpers.getAll().then(function(allResult) {
      this.setState({ allEquipments: allResult.data });
    }.bind(this));
    
    helpers.getProfile(localStorage.getItem("id")).then(function(results) {
       
      if(results.data.length > 0){

        this.setState({allItems: results.data[0].cart});
        console.log("all items contents : ",this.state.allItems);
        console.log("all equipmets avaiable: ",this.state.allEquipments);
        var newArray = [];
        var total= 0;
        for(var i=0; i<this.state.allItems.length; i++){
          for(var j=0; j<this.state.allEquipments.length; j++){
      
            if(this.state.allItems[i] == this.state.allEquipments[j]._id){
             total += this.state.allEquipments[j].price;
              newArray.push(this.state.allEquipments[j]);
            }
          }
        }
        this.setState({total: total});
        console.log("new newArray",newArray);
        this.setState({cart: newArray});
        this.props.Items(this.state.total);
        console.log("final cart",this.state.cart);
      }
      
    }.bind(this));

  },
      



  render: function() {

    return (
      <div className="">
      <br /><br /><br /><br /><br />
        <div className="wrapper">
          <div className="container">

            <h3>Your Reservation Cart</h3>
            <br /><hr /><br />
              <div className="card">
                <div className="card-block">
                  <img className="card-img"/>
                  <div className="card-brand">
                    <h6 className="card-category"></h6>
                    {this.state.cart.map((eq, index) => 
                        <div key={index} >
                          <div className="row">
                            <div className="col-8">
                              <p className="carddescription"><strong>{eq.name}</strong></p>
                              <p className="carddImg"> price: ${eq.price} </p>
                            </div>
                            <div className="col-4">
                              <img src={eq.icon} width="100" />
                            </div>
                          </div>
                          <hr />
                        </div>
                     
                    )}
                    <div className="cardfooter">
                      <div className="" >
                      <i className="fa fa-book" aria-hidden="true"></i> Total: {this.state.total}
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

module.exports = Cart;
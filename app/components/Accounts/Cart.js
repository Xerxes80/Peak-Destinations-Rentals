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
      console.log("all",allResult);
      this.setState({ allEquipments: allResult.data });
      
        
    }.bind(this));
    
    helpers.getCart().then(function(results) {
          console.log("cart : ",results);
      this.setState({ allItems: results.data }); 
        console.log("all again: ",this.state.allEquipments);
        console.log("all cart: ",this.state.allItems);
        var newArray = [];
        var total= 0;
        for(var i=0; i<this.state.allItems.length; i++){
          for(var j=0; j<this.state.allEquipments.length; j++){
      
            if(this.state.allItems[i].itemId == this.state.allEquipments[j]._id){
             total += this.state.allEquipments[j].price;
              newArray.push(this.state.allEquipments[j]);
            }
          }
        }
        this.setState({total: total});
        console.log("new newArray",newArray);
        this.setState({cart: newArray})
        console.log("final cart",this.state.cart);
      }.bind(this));

  },
      



  render: function() {

    return (
      <div className="">
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
                      <div key={index}>
                      
                      <p className="carddescription">{eq.name}</p><img src={eq.icon} width="50px"/>
                      <div className="desc">
                        <p className="carddImg"> src={eq.price} </p>
                      </div>
                      <div className="desc">
                        <p className="carddescription"></p>
                      </div>
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
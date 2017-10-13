var React = require("react");


var BookNow = React.createClass({

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


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="section text-center landing-section">
            <div className="container">
              <div className="row">
                <h3 align="left">Reservations</h3>
                <br /><br />
                <div className="reserveform">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputdate" className="col-form-label">Pick Up Date:</label>
                        <input type="date" className="form-control" id="inputEmail4" placeholder="mm/dd/yyyy"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputdate" className="col-form-label">Drop Off Date:</label>
                        <input type="date" className="form-control" id="inputEmail4" placeholder="mm/dd/yyyy"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputtime" className="col-form-label">AM or PM:</label>
                        <select className="form-control">
                        <option>AM</option>
                        <option>PM</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputLoacation" className="col-form-label">Rental Location</label>
                        <select className="form-control">
                        <option>Breckenridge - Grand Timber Lodge - 75 Snowflake Dr, Breckenridge, CO 80424</option>
                        <option>Vail - The Arrabelle at Vail Square -  675 Lionshead Pl, Vail, CO 81657</option>
                        <option>Beaver Creek - The Osprey - 10 Elk Track Lane, Beaver Creek, CO 81620</option>
                        <option>Aspen - The Little Nell - 501 E. Dean St, Aspen, CO 81611</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="form-group">
                          <label for="inputAddress" className="col-form-label">Email Address</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="Enter Email"/>
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="form-group">
                          <label for="inputAddress2" className="col-form-label">First Name</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="First"/>
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="form-group">
                          <label for="inputAddress2" className="col-form-label">Last Name</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="Last"/>
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <div className="form-group">
                          <label for="inputAddress2" className="col-form-label">Phone Number</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="#"/>
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <button type="submit" className="btn btn-primary">Reserve</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
});

module.exports = BookNow;

//
        // <div className="row">
        //   <div className="col-lg-12">
        //     <div className="jumbotron">
        //     <h2 className="text-center"><strong>BOOK NOW</strong></h2>
        //   </div>
        //   </div>
        // </div>
var React = require("react");

var router = require("react-router");

var Route = router.Route;

var IndexRoute = router.IndexRoute;

var Router = router.Router;

var browserHistory = router.browserHistory;

var Main = require("../components/Main");
var Home = require("../components/Home");
var Equipments= require("../components/Equipments");
var BookNow = require("../components/BookNow");
var AboutUs = require("../components/AboutUs");
var Account = require("../components/Account");
var Goggles = require("../components/equipments/Goggles");
var Helmets = require("../components/equipments/Helmets");
var Poles = require("../components/equipments/Poles");
var Skis = require("../components/equipments/Skis");
var Snowboards = require("../components/equipments/Snowboards");
var Snowmobiles = require("../components/equipments/Snowmobiles");
module.exports = (<Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="Home" component={Home} />
      <Route path="Equipments" component={Equipments} />
      <Route path="BookNow" component={BookNow} />
      <Route path="AboutUs" component={AboutUs} />
      <Route path="Account" component={Account} />
      <Route path="Goggles" component={Goggles} />
      <Route path="Helmets" component={Helmets} />
      <Route path="Poles" component={Poles} />
      <Route path="Skis" component={Skis} />
      <Route path="Snowboards" component={Snowboards} />
      <Route path="Snowmobiles" component={Snowmobiles} />
      <IndexRoute component={Home} />

    </Route>
  </Router>);

import { BrowserRouter as Router, Switch, Route, Link ,DefaultRoute} from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";

function App() {
  return (<Router>
    <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path="/user/:id" component={Users} />
    {/* <Route path="/sign-up" component={SignUp} /> */}
    {/* <Route path="/dasboard" component={Dasboard} /> */}
    {/* <Route path="/forgotpass" component={ForgotPass} /> */}
   {/* <Route path="/fileupload" component={Fileupload} /> */}
    {/* <Route path="/dragndrop" component={Dragdrop} /> */}
    {/* <Route path='' component={Login} /> */}
  </Switch>
  </Router>
  );
}

export default App;

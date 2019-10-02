import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from './components/auth/RegisterComponent';
import Login from './components/auth/LoginComponent';
import Create from "./components/building/Create";
import Index from "./components/building/Index";
import Edit from "./components/building/Edit";
import Locations from "./components/building/Locations";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/index' component={Index} />
          <Route exact path="/location" component={Locations} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

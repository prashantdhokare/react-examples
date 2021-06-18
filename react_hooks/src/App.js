import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./examples/Home";
import Hooks from "./examples/Hooks";
import NoRoute from "./examples/NoRoute";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hooks" children={<Hooks />} />
          <Route component={NoRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

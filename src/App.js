import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";
//components
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default withRouter(App);

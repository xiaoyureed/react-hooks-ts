import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./Counter";

const RouteApp: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/counter" exact component={Counter} />
        </Switch>
      </Router>
    </>
  );
};

export default RouteApp;

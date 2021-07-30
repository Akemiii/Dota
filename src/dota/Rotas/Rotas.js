import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "../Player/Main";
import Profile from "../Player/Profile";


export default function Rotas() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "../Player/Main";
import Profile from "../Player/Profile";
import Match from "../Match/Match";


export default function Rotas() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Profile/:account_id" component={Profile} />
          <Route path="/match/:match_id" component={Match} />
        </Switch>
      </div>
    </Router>
  );
}
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="./search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./saved">Saved</a>
        </li>
       </ul>

      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route exact path="/books/:id" component={BookDetails} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;

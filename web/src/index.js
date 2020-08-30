import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Landing from "./screens/landing";
import Summer from "./screens/summer";
import Hackathon from "./screens/hackathon";
import Organizer from "./screens/organizer";
import Hacker from "./screens/hacker";
import Csummer from "./screens/createsummer";
import Corganizer from "./screens/createorganizer";
import Chacker from "./screens/createhacker";
import Picturised from "./screens/picturised";


ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/summer" component={Summer} />
      <Route exact path="/hackathon" component={Hackathon} />
      <Route exact path="/organizer" component={Organizer} />
      <Route exact path="/hacker" component={Hacker} />
      <Route exact path="/s" component={Csummer} />
      <Route exact path="/o" component={Corganizer} />
      <Route exact path="/h" component={Chacker} />
      <Route exact path="/p" component={Picturised}/>
    </div>
  </Router>,
  document.getElementById("root")
);
import React from "react";
import "./css/App.css";
import NavBar from "./components/navbar_parts/NavBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/main/Home"
import Planner from "./components/main/Planner"
import Shifts from "./components/main/Shifts"
import Requests from "./components/main/Requests"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/planner" component={Planner} />
        <Route path="/shifts" component={Shifts} />
        <Route path="/requests" component={Requests} />
      </Router>
    </div>
  );
}

export default App;

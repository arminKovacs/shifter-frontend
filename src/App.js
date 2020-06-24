import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router } from "react-router-dom";

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

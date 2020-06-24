import React from "react";
import "./css/App.css";
import NavBar from "./components/navbar_parts/NavBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/main/Home";
import Shifts from "./components/main/Shifts";
import Requests from "./components/main/Requests";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/shifts" component={Shifts} />
        <Route path="/requests" component={Requests} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;

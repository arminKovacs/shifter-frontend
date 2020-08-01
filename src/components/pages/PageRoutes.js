import React, { useContext } from "react";
import "../../css/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar_parts/NavBar";
import Signin from "./Signin";
import Shifts from "./Shifts";
import Requests from "./Requests";
import { LoginContext } from "../context/LoginContext";

export default function PageRoutes() {
  let { loginDetails } = useContext(LoginContext);

  return loginDetails !== "Logged in" ? (
    <Router>
      <div className="pageBody">
        <Route exact path="/" component={Signin} />
      </div>
    </Router>
  ) : (
    <Router>
      <NavBar />
      <div className="pageBody">
        <Route exact path="/" component={Shifts} />
        <Route path="/requests" component={Requests} />
      </div>
    </Router>
  );
}

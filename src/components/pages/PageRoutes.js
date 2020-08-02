import React, { useContext } from "react";
import "../../css/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar_parts/NavBar";
import Signin from "./Signin";
import Shifts from "./Shifts";
import Requests from "./Requests";
import { LoginContext } from "../context/LoginContext";

export default function PageRoutes() {
  let { userData } = useContext(LoginContext);

  return userData === null ? (
    <Router>
      <div className="login-body">
        <Route exact path="/" component={Signin} />
      </div>
    </Router>
  ) : (
    <Router>
      <NavBar />
      <div className="page-body">
        <Route exact path="/" component={Shifts} />
        <Route path="/requests" component={Requests} />
      </div>
    </Router>
  );
}

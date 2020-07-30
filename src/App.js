import React from "react";
import "./css/App.css";
import NavBar from "./components/navbar_parts/NavBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Shifts from "./components/pages/Shifts";
import Requests from "./components/pages/Requests";
import Request from "./components/pages/Request";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import { WorkerProvider } from "./components/context/WorkerContext";
import { ShiftProvider } from "./components/context/ShiftContext";
import { WorkerShiftProvider } from "./components/context/WorkerShiftContext";
import { AssignShiftProvider } from "./components/context/AssignShiftContext";
import { RequestProvider } from "./components/context/RequestContext";

function App() {
  return (
    <div className="App">
      <WorkerProvider>
        <ShiftProvider>
          <WorkerShiftProvider>
            <AssignShiftProvider>
              <RequestProvider>
                <Router>
                  <NavBar />
                  <div className="pageBody">
                    <Route exact path="/" component={Home} />
                    <Route path="/shifts" component={Shifts} />
                    <Route path="/requests" component={Requests} />
                    <Route path="/request" component={Request} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                  </div>
                </Router>
              </RequestProvider>
            </AssignShiftProvider>
          </WorkerShiftProvider>
        </ShiftProvider>
      </WorkerProvider>
    </div>
  );
}

export default App;

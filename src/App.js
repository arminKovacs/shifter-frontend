import React from "react";
import "./css/App.css";
import PageRoutes from "./components/pages/PageRoutes";
import { WorkerProvider } from "./components/context/WorkerContext";
import { ShiftProvider } from "./components/context/ShiftContext";
import { WorkerShiftProvider } from "./components/context/WorkerShiftContext";
import { AssignShiftProvider } from "./components/context/AssignShiftContext";
import { RequestProvider } from "./components/context/RequestContext";
import { LoginProvider } from "./components/context/LoginContext";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <WorkerProvider>
          <ShiftProvider>
            <WorkerShiftProvider>
              <AssignShiftProvider>
                <RequestProvider>
                  <PageRoutes />
                </RequestProvider>
              </AssignShiftProvider>
            </WorkerShiftProvider>
          </ShiftProvider>
        </WorkerProvider>
      </LoginProvider>
    </div>
  );
}

export default App;

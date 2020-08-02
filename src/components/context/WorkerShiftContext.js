import React, { useState, useEffect, createContext, useContext } from "react";
import { LoginContext } from "./LoginContext";
import axios from "axios";

export const WorkerShiftContext = createContext();

export const WorkerShiftProvider = (props) => {
  let [workerShifts, setWorkerShifts] = useState([]);
  let { userData } = useContext(LoginContext);

  useEffect(() => {
    axios.get("http://localhost:8080/worker-shifts").then((response) => {
      setWorkerShifts(response.data);
    });
  }, [userData]);

  return (
    <WorkerShiftContext.Provider value={{ workerShifts, setWorkerShifts }}>
      {props.children}
    </WorkerShiftContext.Provider>
  );
};

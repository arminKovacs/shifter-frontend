import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { WorkerContext } from "./WorkerContext";

export const WorkerShiftContext = createContext();

export const WorkerShiftProvider = (props) => {
  let [workerShifts, setWorkerShifts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/worker-shifts").then(response => {
      setWorkerShifts(response.data);
    });
  }, []);

  return (
    <WorkerContext.Provider value={{ workerShifts, setWorkerShifts }}>
      {props.children}
    </WorkerContext.Provider>
  );
};

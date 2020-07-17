import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WorkerShiftContext = createContext();

export const WorkerShiftProvider = (props) => {
  let [workerShifts, setWorkerShifts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/worker-shifts").then(response => {
      setWorkerShifts(response.data);
    });
  }, []);

  return (
    <WorkerShiftContext.Provider value={{ workerShifts, setWorkerShifts }}>
      {props.children}
    </WorkerShiftContext.Provider>
  );
};

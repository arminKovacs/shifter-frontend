import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WorkerContext = createContext();

export const WorkerProvider = (props) => {
  let [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((response) => {
      setWorkers(response.data);
    });
  }, []);

  return (
    <WorkerContext.Provider value={{ workers, setWorkers }}>
      {props.children}
    </WorkerContext.Provider>
  );
};

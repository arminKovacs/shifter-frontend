import React, { useState, useEffect, createContext, useContext } from "react";
import { LoginContext } from "./LoginContext";
import axios from "axios";

export const WorkerContext = createContext();

export const WorkerProvider = (props) => {
  let [workers, setWorkers] = useState([]);
  let { userData } = useContext(LoginContext);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((response) => {
      setWorkers(response.data);
    });
  }, [userData]);

  return (
    <WorkerContext.Provider value={{ workers, setWorkers }}>
      {props.children}
    </WorkerContext.Provider>
  );
};

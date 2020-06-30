import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";

export const WorkerContext = createContext();

export const WorkerProvider = (props) => {
  let [workers, setWorkers] = useState([]);

  useEffect(() => {
    //Axios goes here
    setWorkers([
      { name: "Vágási Feri" },
      { name: "Taki bá" },
      { name: "Gábor Gábor" }
    ]);
  }, []);

  return (
    <WorkerContext.Provider value={{ workers, setWorkers }}>
      {props.children}
    </WorkerContext.Provider>
  );
};

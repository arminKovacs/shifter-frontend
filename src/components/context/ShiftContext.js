import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ShiftContext = createContext();

export const ShiftProvider = (props) => {
  let [shifts, setShifts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/shifts").then((response) => {
      setShifts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <ShiftContext.Provider value={{ shifts, setShifts }}>
      {props.children}
    </ShiftContext.Provider>
  );
};

import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";

export const ShiftContext = createContext();

export const ShiftProvider = (props) => {
  let [shifts, setShifts] = useState([]);

  useEffect(() => {
    //Axios goes here
    setShifts([
      { name: "Morning shift", time: "06:00 - 14:00" },
      { name: "Afternoon shift", time: "14:00 - 22:00" },
      { name: "Night shift", time: "22:00 - 06:00" }
    ]);
  }, []);

  return (
    <ShiftContext.Provider value={{ shifts, setShifts }}>
      {props.children}
    </ShiftContext.Provider>
  );
};

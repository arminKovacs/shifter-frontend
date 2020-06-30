import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";

export const ShiftContext = createContext();

export const ShiftProvider = (props) => {
  let [shifts, setShifts] = useState([]);

  useEffect(() => {
    //Axios goes here
    setShifts([
      { name: "Morning shfit", time: "06:00 - 14:00" },
      { name: "Afternoon shfit", time: "14:00 - 22:00" },
      { name: "Night shfit", time: "22:00 - 06:00" }
    ]);
  }, []);

  return (
    <ShiftContext.Provider value={{ shifts, setShifts }}>
      {props.children}
    </ShiftContext.Provider>
  );
};

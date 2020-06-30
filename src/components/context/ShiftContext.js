import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";

export const ShiftContext = createContext();

export const ShiftProvider = (props) => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    //Axios goes here
    setShifts(
      { shiftName: "Morning shfit", shiftTime: "06:00 - 14:00" },
      { shiftName: "Afternoon shfit", shiftTime: "14:00 - 22:00" },
      { shiftName: "Night shfit", shiftTime: "22:00 - 06:00" }
    );
  }, []);

  return (
    <ShiftContext.Provider value={{ shifts, setShifts }}>
      {props.children}
    </ShiftContext.Provider>
  );
};

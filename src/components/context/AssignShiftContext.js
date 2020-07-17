import React, { useState, createContext, useContext } from "react";
import { WorkerShiftContext } from "./WorkerShiftContext";
import axios from "axios";

export const AssignShiftContext = createContext();

export const AssignShiftProvider = (props) => {
  let [shiftAssignmentDetails, setShiftAssignmentDetails] = useState();

  let {setWorkerShifts} = useContext(WorkerShiftContext);

  const postShiftAssignment = () => {
    console.log(shiftAssignmentDetails);
    axios
      .post("http://localhost:8080/assign-shift", {
        shiftAssignmentDetails,
      })
      .then((response) => {
        setWorkerShifts(response.data);
      });
  };

  return (
    <AssignShiftContext.Provider
      value={{
        shiftAssignmentDetails,
        setShiftAssignmentDetails,
        postShiftAssignment,
      }}
    >
      {props.children}
    </AssignShiftContext.Provider>
  );
};

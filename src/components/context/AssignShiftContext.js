import React, { useState, createContext, useContext } from "react";
import { WorkerShiftContext } from "./WorkerShiftContext";
import axios from "axios";

export const AssignShiftContext = createContext();

export const AssignShiftProvider = (props) => {
  let [shiftAssignmentDetails, setShiftAssignmentDetails] = useState({
    workerId: "",
    shiftId: "",
    startDate: "",
    endDate: "",
  });

  let { workerShifts, setWorkerShifts } = useContext(WorkerShiftContext);

  const postShiftAssignment = () => {
    axios
      .post("http://localhost:8080/assign-shift", {
        workerId: shiftAssignmentDetails.workerId,
        shiftId: shiftAssignmentDetails.shiftId,
        startDate: shiftAssignmentDetails.startDate,
        endDate: shiftAssignmentDetails.endDate,
      })
      .then((response) => {
        console.log(workerShifts);
        setWorkerShifts(response.data);
        console.log(workerShifts);
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

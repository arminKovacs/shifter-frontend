import React, { useState, useEffect, createContext, useContext } from "react";
import { WorkerShiftContext } from "../context/WorkerShiftContext";
import axios from "axios";

export const AssignShiftContext = createContext();

export default function AssignShiftProvider(props) {
  let [shiftAssignmentDetails, setShiftAssignmentDetails] = useState({
    workerId: "",
    shiftId: "",
    startDate: "",
    endDate: "",
  });

  let { setWorkerShifts } = useContext(WorkerShiftContext);

  const postShiftAssignment = () => {
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
    ></AssignShiftContext.Provider>
  );
}

import React, { useState, createContext, useEffect, useContext } from "react";
import { WorkerShiftContext } from "./WorkerShiftContext";
import { LoginContext } from "./LoginContext";
import { message } from "antd";
import axios from "axios";

export const RequestContext = createContext();

export function RequestProvider(props) {
  let [requests, setRequests] = useState([]);
  let [shiftRequestDetails, setShiftRequestDetails] = useState({
    workerId: "6",
    shiftId: "",
    startTime: "",
    endTime: "",
    startDate: "",
    endDate: "",
  });
  let { setWorkerShifts } = useContext(WorkerShiftContext);
  let { userData } = useContext(LoginContext);

  useEffect(() => {
    axios.get("http://localhost:8080/shift-requests").then((response) => {
      setRequests(response.data);
    });
  }, [userData]);

  function getShiftRequests() {
    axios.get("http://localhost:8080/shift-requests").then((response) => {
      setRequests(response.data);
    });
  }

  function postShiftRequests() {
    axios
      .post(
        "http://localhost:8080/shift-requests/" + shiftRequestDetails.workerId,
        {
          shiftId: shiftRequestDetails.shiftId,
          startDate: shiftRequestDetails.startDate,
          endDate: shiftRequestDetails.endDate,
          startTime: shiftRequestDetails.startTime,
          endTime: shiftRequestDetails.endTime,
        }
      )
      .then((response) => {
        setRequests(response.data);
        message.success("Request sent");
      })
      .catch(() => {
        message.error("Request already sent");
      });
  }

  function deleteShiftRequest(requestId) {
    axios
      .delete("http://localhost:8080/shift-requests/" + requestId)
      .then((response) => {
        setRequests(response.data);
      });
  }

  function postShiftAssignment(shiftToAssign, requestId) {
    axios
      .post(
        "http://localhost:8080/worker-shifts/" + shiftToAssign.shifterUser.id,
        {
          shiftId: shiftToAssign.requestedShiftId,
          startDate: shiftToAssign.startDate,
          endDate: shiftToAssign.endDate,
          startTime: shiftToAssign.startTime,
          endTime: shiftToAssign.endTime,
        }
      )
      .then((response) => {
        setWorkerShifts(response.data);
        deleteShiftRequest(requestId);
        message.success("Shift assigned");
      })
      .catch(() => {
        message.error("Shift already assigned to user");
      });
  }

  return (
    <RequestContext.Provider
      value={{
        requests,
        setRequests,
        getShiftRequests,
        shiftRequestDetails,
        setShiftRequestDetails,
        postShiftRequests,
        deleteShiftRequest,
        postShiftAssignment,
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
}

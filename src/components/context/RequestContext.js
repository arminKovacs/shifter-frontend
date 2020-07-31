import React, { useState, createContext, useEffect } from "react";
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

  useEffect(() => {
    axios.get("http://localhost:8080/shift-requests/").then((response) => {
      setRequests(response.data);
    });
  });

  function getShiftRequests() {
    axios.get("http://localhost:8080/shift-requests/").then((response) => {
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
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
}

import React, { useState, createContext } from "react";
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

  function getShiftRequests() {
    axios.get("http://localhost:8080/shift-requests/").then((response) => {
      setRequests(response.data);
    });
  }

  return (
    <RequestContext.Provider
      value={{ requests, setRequests, getShiftRequests, shiftRequestDetails, setShiftRequestDetails }}
    >
      {props.children}
    </RequestContext.Provider>
  );
}

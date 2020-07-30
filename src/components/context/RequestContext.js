import React, { useState, createContext } from "react";
import axios from "axios";

export const RequestContext = createContext();

export function RequestProvider(props) {
  [requests, setRequests] = useState();

  function getShiftRequests() {
    axios.get("http://localhost:8080/shift-requests/").then((response) => {
      setRequests(response.data);
    });
  }

  return (
    <RequestContext.Provider
      value={{ requests, setRequests, getShiftRequests }}
    >
      {props.children}
    </RequestContext.Provider>
  );
}

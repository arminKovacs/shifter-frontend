import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { message } from "antd";

export const ShiftContext = createContext();

export const ShiftProvider = (props) => {
  let [shifts, setShifts] = useState([]);
  let [confirmLoading, setConfirmLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  let [newShiftDetails, setNewShiftDetails] = useState({
    name: "",
    startTime: "",
    endTime: "",
    shiftColor: "",
  });

  function showModal() {
    setVisible(true);
  }

  useEffect((shifts) => {
    axios.get("http://localhost:8080/shifts").then((response) => {
      setShifts(response.data);
    });
  }, []);

  function postNewShiftDetails() {
    axios
      .post("http://localhost:8080/shifts", {
        name: newShiftDetails.name,
        startTime: newShiftDetails.startTime,
        endTime: newShiftDetails.endTime,
        shiftColor: newShiftDetails.shiftColor,
      })
      .then((response) => {
        setShifts(response.data);
        message.success("New shift created");
      })
      .catch((error) => console.log(error));
  }

  return (
    <ShiftContext.Provider
      value={{
        shifts,
        setShifts,
        confirmLoading,
        setConfirmLoading,
        visible,
        setVisible,
        showModal,
        newShiftDetails,
        setNewShiftDetails,
        postNewShiftDetails,
      }}
    >
      {props.children}
    </ShiftContext.Provider>
  );
};

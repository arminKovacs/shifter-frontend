import React, { useState, useEffect, createContext, useContext } from "react";
import { LoginContext } from "./LoginContext";
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
  let { userData } = useContext(LoginContext);

  function showModal() {
    setVisible(true);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/shifts").then((response) => {
      setShifts(response.data);
    });
  }, [userData]);

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
      .catch((error) => {
        if (error.response.data.name) {
          message.error(error.response.data.name);
        }
        if (error.response.data.startTime) {
          message.error(error.response.data.startTime);
        }
        if (error.response.data.endTime) {
          message.error(error.response.data.endTime);
        }
        if (error.response.data.shiftColor) {
          message.error(error.response.data.shiftColor);
        }
      });
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

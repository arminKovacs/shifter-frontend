import React, { useState, createContext, useContext } from "react";
import { WorkerShiftContext } from "./WorkerShiftContext";
import { message } from "antd";
import axios from "axios";

export const ShiftDetailsContext = createContext();

export function ShiftDetailsProvider(props) {
  let [confirmLoading, setConfirmLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  let [modalText, setModalText] = useState("");
  let [shiftToDelete, setShiftToDelete] = useState();
  let { setWorkerShifts } = useContext(WorkerShiftContext);

  function showModal() {
    setVisible(true);
  }

  function deleteEvent() {
    axios
      .delete("http://localhost:8080/worker-shifts/" + shiftToDelete)
      .then((response) => {
        setWorkerShifts(response.data);
        message.success("Shift deleted");
      });
  }

  return (
    <ShiftDetailsContext.Provider
      value={{
        confirmLoading,
        setConfirmLoading,
        visible,
        setVisible,
        showModal,
        modalText,
        setModalText,
        shiftToDelete,
        setShiftToDelete,
        deleteEvent,
      }}
    >
      {props.children}
    </ShiftDetailsContext.Provider>
  );
}

import React, { useState, createContext } from "react";

export const ShiftDetailsContext = createContext();

export function ShiftDetailsProvider(props) {
  let [confirmLoading, setConfirmLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  let [modalText, setModalText] = useState("");

  function showModal() {
    setVisible(true);
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
      }}
    >
      {props.children}
    </ShiftDetailsContext.Provider>
  );
}

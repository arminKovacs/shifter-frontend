import React, { useState, createContext } from "react";

export const ShiftDetailsContext = createContext();

export function ShiftDetailsProvider(props) {
  let [confirmLoading, setConfirmLoading] = useState(false);
  let [visible, setVisible] = useState(false);

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
      }}
    >
      {props.children}
    </ShiftDetailsContext.Provider>
  );
}

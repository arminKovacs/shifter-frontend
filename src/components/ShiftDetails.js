import React, { useContext } from "react";
import { ShiftDetailsContext } from "./context/ShiftDetailsContext";
import { Modal } from "antd";

export default function ShiftDetails(props) {
  let {
    confirmLoading,
    setConfirmLoading,
    visible,
    setVisible,
    modalText,
  } = useContext(ShiftDetailsContext);

  function handleOk() {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <Modal
      title="Shift details"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
}

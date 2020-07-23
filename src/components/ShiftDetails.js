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
    deleteEvent,
  } = useContext(ShiftDetailsContext);

  function handleOk() {
    setConfirmLoading(true);
    deleteEvent();
    setVisible(false);
    setConfirmLoading(false);
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
      okType="danger"
      okText="Delete shift"
      cancelText="Return"
    >
      <p>{modalText}</p>
    </Modal>
  );
}

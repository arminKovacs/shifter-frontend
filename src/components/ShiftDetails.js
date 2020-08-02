import React, { useContext } from "react";
import { ShiftDetailsContext } from "./context/ShiftDetailsContext";
import { LoginContext } from "./context/LoginContext";
import { Modal, Divider, Button } from "antd";

export default function ShiftDetails(props) {
  let {
    confirmLoading,
    setConfirmLoading,
    visible,
    setVisible,
    modalText,
    deleteEvent,
    shiftTimeRangeText,
  } = useContext(ShiftDetailsContext);

  let { userData } = useContext(LoginContext);

  function handleOk() {
    setConfirmLoading(true);
    deleteEvent();
    setVisible(false);
    setConfirmLoading(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  return userData.roles.includes("SUPERVISOR") ? (
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
      <Divider />
      <p>{shiftTimeRangeText}</p>
    </Modal>
  ) : (
    <Modal
      title="Shift details"
      visible={visible}
      onOk={handleCancel}
      confirmLoading={confirmLoading}
      okText="Return"
      footer={
        <Button key="return" onClick={handleCancel}>
          Return
        </Button>
      }
    >
      <p>{modalText}</p>
      <Divider />
      <p>{shiftTimeRangeText}</p>
    </Modal>
  );
}

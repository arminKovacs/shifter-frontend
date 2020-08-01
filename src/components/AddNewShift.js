import React, { useContext } from "react";
import { ShiftContext } from "./context/ShiftContext";
import { Modal, Divider } from "antd";

export default function AddNewShift(props) {
  let { confirmLoading, setConfirmLoading, visible, setVisible } = useContext(
    ShiftContext
  );

  function handleOk() {
    setConfirmLoading(true);
    setVisible(false);
    setConfirmLoading(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <Modal
      title="New shift details"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText="Add shift"
      cancelText="Return"
    >
      <p>Up</p>
      <Divider />
      <p>Down</p>
    </Modal>
  );
}

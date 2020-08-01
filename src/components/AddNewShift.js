import React, { useContext } from "react";
import { ShiftContext } from "./context/ShiftContext";
import { Modal, Divider, TimePicker, Input } from "antd";

export default function AddNewShift(props) {
  let { confirmLoading, setConfirmLoading, visible, setVisible } = useContext(
    ShiftContext
  );

  const { RangePicker } = TimePicker;

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
      <Input placeholder="Shift name"/>
      <Divider />
      <RangePicker/>
    </Modal>
  );
}

import React, { useContext, useState } from "react";
import { ShiftContext } from "./context/ShiftContext";
import { Modal, Divider, TimePicker, Input } from "antd";
import { CirclePicker } from "react-color";

export default function AddNewShift(props) {
  let {
    confirmLoading,
    setConfirmLoading,
    visible,
    setVisible,
    newShiftDetails,
    postNewShiftDetails,
  } = useContext(ShiftContext);
  let [timePicked, setTimePicked] = useState(false);

  const { RangePicker } = TimePicker;

  function handleOk() {
    setConfirmLoading(true);
    postNewShiftDetails();
    setVisible(false);
    setConfirmLoading(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  function timeChange(value, timeStrings) {
    newShiftDetails.startTime = timeStrings[0];
    newShiftDetails.endTime = timeStrings[1];
    setTimePicked(true);
    /* changeDateRange([
      moment(dateStrings[0], "YYYY-MM-DD"),
      moment(dateStrings[1], "YYYY-MM-DD"),
    ]); */
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
      <Input
        placeholder="Shift name"
        onChange={(event) => {
          newShiftDetails.name = event.target.value;
        }}
      />
      <Divider />
      <RangePicker onChange={timeChange} />
      <Divider />
      <CirclePicker
        onChangeComplete={(color) => {
          newShiftDetails.shiftColor = color.hex;
        }}
      />
    </Modal>
  );
}

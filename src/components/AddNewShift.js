import React, { useContext, useState } from "react";
import { ShiftContext } from "./context/ShiftContext";
import { Modal, Divider, TimePicker, Input } from "antd";
import { CirclePicker } from "react-color";
import moment from "moment";

export default function AddNewShift(props) {
  let {
    confirmLoading,
    setConfirmLoading,
    visible,
    setVisible,
    newShiftDetails,
    postNewShiftDetails,
  } = useContext(ShiftContext);
  let [timeRange, setTimeRange] = useState(null);
  let [inputValue, setInputValue] = useState(null);

  const { RangePicker } = TimePicker;

  function handleOk() {
    setConfirmLoading(true);
    postNewShiftDetails();
    setTimeRange(null);
    setInputValue(null);
    newShiftDetails.shiftColor = "";
    setVisible(false);
    setConfirmLoading(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  function timeChange(value, timeStrings) {
    newShiftDetails.startTime = timeStrings[0];
    newShiftDetails.endTime = timeStrings[1];
    setTimeRange([
      moment(timeStrings[0], "HH:mm:ss"),
      moment(timeStrings[1], "HH:mm:ss"),
    ]);
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
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <Divider />
      <RangePicker onChange={timeChange} value={timeRange} />
      <Divider />
      <CirclePicker
        onChangeComplete={(color) => {
          newShiftDetails.shiftColor = color.hex;
        }}
      />
    </Modal>
  );
}

import React, { useContext, useState } from "react";
import DisplayCalendar from "../DisplayCalendar";
import { WorkerContext } from "../context/WorkerContext";
import { ShiftContext } from "../context/ShiftContext";
import { AssignShiftContext } from "../context/AssignShiftContext";
import { Menu, Dropdown, Button, Divider, DatePicker } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "../../css/Shifts.css";

export default function Shifts() {
  const { RangePicker } = DatePicker;
  let { workers } = useContext(WorkerContext);
  let { shifts } = useContext(ShiftContext);
  let [setShiftAssignmentDetails, postShiftAssignment] = useContext(
    AssignShiftContext
  );

  let [displayWorker, setDisplayWorker] = useState("Choose a person");
  let [displayShift, setDisplayShift] = useState("Shift");
  let [chosenWorker, setChosenWorker] = useState();
  let [chosenShift, setChosenShift] = useState();
  let [chosenDate, setChosenDate] = useState();

  const chooseWorker = (worker) => {
    setDisplayWorker(worker.firstName + " " + worker.lastName);
    setChosenWorker(worker);
  };

  const switchToChosenShift = (shift) => {
    setDisplayShift(shift.name);
    setChosenShift(shift);
  };

  const dateChange = (value, dateStrings) => {
    setChosenDate({ startDate: dateStrings[0], endDate: dateStrings[1] });
  };

  const sendAssignmentDetails = () => {
    setShiftAssignmentDetails({
      workerId: chosenWorker.id,
      shiftId: chosenShift.id,
      startDate: chosenDate.startDate,
      endDate: chosenDate.endDate,
    });
    postShiftAssignment();
  };

  let workersList = (
    <Menu>
      {workers.map((worker) => (
        <Menu.Item
          key={"worker" + worker.id}
          icon={<UserOutlined />}
          onClick={() => chooseWorker(worker)}
        >
          {worker.firstName + " " + worker.lastName}
        </Menu.Item>
      ))}
    </Menu>
  );

  let shiftTypes = (
    <Menu>
      {shifts.map((shift) => (
        <Menu.Item
          key={"shift" + shift.id}
          icon={<ClockCircleOutlined />}
          onClick={() => switchToChosenShift(shift)}
        >
          {shift.name}: {shift.startTime}-{shift.endTime}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={workersList} className="person-dropdown">
        <Button>
          {displayWorker} <DownOutlined />
        </Button>
      </Dropdown>
      <RangePicker className="work-time" onChange={dateChange} />
      <Dropdown overlay={shiftTypes} className="shift-dropdown">
        <Button>
          {displayShift} <DownOutlined />
        </Button>
      </Dropdown>
      <Button
        type="primary"
        shape="circle"
        icon={<CheckOutlined />}
        className="check-button"
        onClick={sendAssignmentDetails}
      />
      <Divider />
      <DisplayCalendar />
    </div>
  );
}

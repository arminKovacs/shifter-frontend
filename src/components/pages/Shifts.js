import React, { useContext, useState } from "react";
import moment from "moment";
import DisplayCalendar from "../DisplayCalendar";
import { WorkerContext } from "../context/WorkerContext";
import { ShiftContext } from "../context/ShiftContext";
import { AssignShiftContext } from "../context/AssignShiftContext";
import { Menu, Dropdown, Button, Divider, DatePicker, message } from "antd";
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
  let { shiftAssignmentDetails, postShiftAssignment } = useContext(
    AssignShiftContext
  );

  let [displayWorker, setDisplayWorker] = useState("Choose a person");
  let [displayShift, setDisplayShift] = useState("Shift");

  const chooseWorker = (worker) => {
    setDisplayWorker(worker.firstName + " " + worker.lastName);
    shiftAssignmentDetails.workerId = worker.id;
  };

  const switchToChosenShift = (shift) => {
    setDisplayShift(shift.name);
    shiftAssignmentDetails.shiftId = shift.id;
  };

  const dateChange = (value, dateStrings) => {
    shiftAssignmentDetails.startDate = dateStrings[0];
    shiftAssignmentDetails.endDate = dateStrings[1];
  };

  let workersList = (
    <Menu>
      {workers === undefined
        ? "No workers added yet"
        : workers.map((worker) => (
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

  const disabledDate = (current) => {
    let today = new Date().toISOString().slice(0, 10);
    return current && current < moment(today, "YYYY-MM-DD");
  };

  return (
    <div>
      <Dropdown overlay={workersList} className="person-dropdown">
        <Button>
          {displayWorker} <DownOutlined />
        </Button>
      </Dropdown>
      <RangePicker
        className="work-time"
        onChange={dateChange}
        disabledDate={disabledDate}
      />
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
        onClick={() => {
          postShiftAssignment();
          message.success("Shift updated!");
        }}
      />
      <Divider />
      <DisplayCalendar />
    </div>
  );
}

import React, { useContext, useState } from "react";
import DisplayCalendar from "../DisplayCalendar"
import { WorkerContext } from "../context/WorkerContext";
import { ShiftContext } from "../context/ShiftContext";
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
  let [chosenWorker, setChosenWorker] = useState("Choose a person");
  let [chosenShift, setChosenShift] = useState("Shift");

  let switchToChosenName = (name) => {
    setChosenWorker(name);
  };

  let switchToChosenShift = (shift) => {
    setChosenShift(shift);
  };

  let workersList = (
    <Menu>
      {workers.map((worker) => (
        <Menu.Item
          key="1"
          icon={<UserOutlined />}
          onClick={() => switchToChosenName(worker.name)}
        >
          {worker.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  let shiftTypes = (
    <Menu>
      {shifts.map((shift) => (
        <Menu.Item
          key="shift1"
          icon={<ClockCircleOutlined />}
          onClick={() => switchToChosenShift(shift.name)}
        >
          {shift.name} - {shift.time}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={workersList} className="person-dropdown">
        <Button>
          {chosenWorker} <DownOutlined />
        </Button>
      </Dropdown>
      <RangePicker className="work-time" />
      <Dropdown overlay={shiftTypes} className="shift-dropdown">
        <Button>
          {chosenShift} <DownOutlined />
        </Button>
      </Dropdown>
      <Button
        type="primary"
        shape="circle"
        icon={<CheckOutlined />}
        className="check-button"
      />
      <Divider />
      <DisplayCalendar/>
    </div>
  );
}

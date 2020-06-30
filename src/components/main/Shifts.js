import React, { useContext } from "react";
import { WorkerContext } from "../context/WorkerContext";
import { ShiftContext } from "../context/ShiftContext";
import { Calendar } from "antd";
import { DatePicker } from "antd";
import { Menu, Dropdown, Button, Divider } from "antd";
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

  let workersList = (
    <Menu>
      {workers.map((worker) => (
        <Menu.Item key="1" icon={<UserOutlined />}>
          {worker.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  let shiftTypes = (
    <Menu>
      {shifts.map((shift) => (
        <Menu.Item key="shift1" icon={<ClockCircleOutlined />}>
          {shift.name} - {shift.time}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={workersList} className="person-dropdown">
        <Button>
          Choose a person <DownOutlined />
        </Button>
      </Dropdown>
      <RangePicker className="work-time" />
      <Dropdown overlay={shiftTypes} className="shift-dropdown">
        <Button>
          Shift <DownOutlined />
        </Button>
      </Dropdown>
      <Button
        type="primary"
        shape="circle"
        icon={<CheckOutlined />}
        className="check-button"
      />
      <Divider />
      <Calendar />
    </div>
  );
}

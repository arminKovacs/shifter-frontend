import React from "react";
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

  const workers = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Vágási Feri
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Taki bá
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Gábor Gábor
      </Menu.Item>
    </Menu>
  );

  const shiftTypes = (
    <Menu>
      <Menu.Item key="shift1" icon={<ClockCircleOutlined />}>
        Morning shift 06:00 - 14:00
      </Menu.Item>
      <Menu.Item key="shift2" icon={<ClockCircleOutlined />}>
        Afternoon shift 14:00 - 22:00
      </Menu.Item>
      <Menu.Item key="shift3" icon={<ClockCircleOutlined />}>
        Night shift 22:00 - 06:00
      </Menu.Item>
      <Menu.Item key="shift4" icon={<ClockCircleOutlined />}>
        Holiday
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={workers} className="person-dropdown">
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
      <Divider/>
      <Calendar/>
    </div>
  );
}

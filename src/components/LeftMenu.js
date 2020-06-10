import React from "react";
import { Menu } from "antd";

export default function LeftMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">Home</Menu.Item>
      <Menu.Item key="alipay">Shifts</Menu.Item>
    </Menu>
  );
}

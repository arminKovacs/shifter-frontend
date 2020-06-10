import React from "react";
import { Menu } from "antd";

export default function RightMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">Signin</Menu.Item>
      <Menu.Item key="app">Signup</Menu.Item>
    </Menu>
  );
}

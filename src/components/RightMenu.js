import React from "react";
import { Menu } from "antd";

export default function RightMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState}>
      <Menu.Item key="mail">Signin</Menu.Item>
      <Menu.Item key="app">Signup</Menu.Item>
    </Menu>
  );
}

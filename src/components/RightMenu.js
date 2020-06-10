import React from "react";
import { Menu } from "antd";

export default function RightMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState}>
      <Menu.Item key="signin">Signin</Menu.Item>
      <Menu.Item key="signup">Signup</Menu.Item>
    </Menu>
  );
}

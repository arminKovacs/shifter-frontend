import React from "react";
import { Menu } from "antd";

export default function LeftMenu(props) {
  let modeState = props.modeProp
  
  return (
    <Menu mode={modeState}>
      <Menu.Item key="mail">Home</Menu.Item>
      <Menu.Item key="alipay">Shifts</Menu.Item>
    </Menu>
  );
}

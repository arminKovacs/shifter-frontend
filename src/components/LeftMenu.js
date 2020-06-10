import React from "react";
import { Menu } from "antd";

export default function LeftMenu(props) {
  let modeState = props.modeProp
  
  return (
    <Menu mode={modeState}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="shifts">Shifts</Menu.Item>
      <Menu.Item key="holidays">Holidays</Menu.Item>
      <Menu.Item key="requests">Requests</Menu.Item>
    </Menu>
  );
}

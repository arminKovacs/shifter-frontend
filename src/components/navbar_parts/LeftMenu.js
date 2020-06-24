import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function LeftMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="planner">
        <Link to="/planner">Planner</Link>
      </Menu.Item>
      <Menu.Item key="shifts">
        <Link to="/shifts">Shifts</Link>
      </Menu.Item>
      <Menu.Item key="requests">
        <Link to="/requests">Requests</Link>
      </Menu.Item>
    </Menu>
  );
}

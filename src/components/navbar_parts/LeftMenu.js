import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function LeftMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="home" component={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item key="planner" component={Link} to="/planner">
        Planner
      </Menu.Item>
      <Menu.Item key="shifts" component={Link} to="/shifts">
        Shifts
      </Menu.Item>
      <Menu.Item key="requests" component={Link} to="/requests">
        Requests
      </Menu.Item>
    </Menu>
  );
}

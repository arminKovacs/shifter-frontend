import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function RightMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="signin" component={Link} to="/signin">
        Signin
      </Menu.Item>
      <Menu.Item key="signup" component={Link} to="/signup">
        Signup
      </Menu.Item>
    </Menu>
  );
}

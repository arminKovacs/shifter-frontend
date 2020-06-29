import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function RightMenu(props) {
  let modeState = props.modeProp;

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="signin" component={Link} to="/signin">
        <Link to="/signin">Sign in</Link>
      </Menu.Item>
      <Menu.Item key="signup" component={Link} to="/signup">
        <Link to="/signup">Sign up</Link>
      </Menu.Item>
    </Menu>
  );
}

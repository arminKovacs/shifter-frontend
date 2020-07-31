import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function RightMenu(props) {
  let modeState = props.modeProp;
  let closeDrawer = props.onClose;

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="signin" component={Link} to="/signin">
        <Link to="/logout" onClick={closeDrawer}>
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );
}

import React, { useContext } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function RightMenu(props) {
  let modeState = props.modeProp;
  let closeDrawer = props.onClose;
  let { setUserData, logout } = useContext(LoginContext);

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="logout" component={Link} onClick={closeDrawer}>
        <Link
          to="/"
          onClick={() => {
            setUserData(null);
            logout();
          }}
        >
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );
}

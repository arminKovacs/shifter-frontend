import React, { useContext } from "react";
import { RequestContext } from "../context/RequestContext";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function LeftMenu(props) {
  let modeState = props.modeProp;
  let closeDrawer = props.onClose;
  let { getShiftRequests } = useContext(RequestContext);

  return (
    <Menu mode={modeState} selectedKeys={0}>
      <Menu.Item key="home">
        <Link to="/" onClick={closeDrawer}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="shifts">
        <Link to="/shifts" onClick={closeDrawer}>
          Shifts
        </Link>
      </Menu.Item>
      <Menu.Item key="requests">
        <Link
          to="/requests"
          onClick={() => {
            getShiftRequests();
          }}
        >
          Requests
        </Link>
      </Menu.Item>
      <Menu.Item key="request">
        <Link to="/request" onClick={closeDrawer}>
          Request
        </Link>
      </Menu.Item>
    </Menu>
  );
}

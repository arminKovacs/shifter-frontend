import React, { Component } from "react";
import { Menu } from "antd";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="mail">
        </Menu.Item>
        <Menu.Item key="app">
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;

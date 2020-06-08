import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";

function App() {
  const { Content, Footer } = Layout;

  return (
    <div className="App">
      <Layout className="layout">
          <div className="logo" />
          <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Holiday</Menu.Item>
            <Menu.Item key="3">Shifts</Menu.Item>
          </Menu>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2020 Created by Ármin Kovács
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

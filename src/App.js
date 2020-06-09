import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import logo from "./images/logo.png";

let Logo = styled.div`
  background-image: url(${logo});
  height: 42%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  vertical-align: bottom;
  display: inline-block;
  top: 1px;
  border-bottom: 2px solid transparent;
`;

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <Logo/>
          <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Holiday</Menu.Item>
            <Menu.Item key="3">Shifts</Menu.Item>
          </Menu>
        </Header>
        <Content className="mainContent">
          <div className="site-layout-content"></div>
        </Content>
        <Footer className="footer">©2020 Created by Ármin Kovács</Footer>
      </Layout>
    </div>
  );
}

export default App;

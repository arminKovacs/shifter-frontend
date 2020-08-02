import "../../css/Form.css";
import React, { useContext } from "react";
import { Form, Input, Button, Row, Col, Divider } from "antd";
//import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function Signin() {
  let { sendLoginForm } = useContext(LoginContext);

  const onFinish = (values) => {
    sendLoginForm(values);
  };

  return (
    <Row id="starter-page">
      <Col id="login-picture" xs={0} xm={8} lg={8} />
      <Col id="login-container" xs={24} xm={16} lg={16}>
        <div className="data-form">
          <h1>Welcome to Shifter!</h1>
          <Divider />
          <div id="signin-logo"></div>
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              label="Username"
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              label="Password"
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            {/* <Form.Item>
              <Link className="login-form-forgot" to="/">
                Forgot password
              </Link>
            </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

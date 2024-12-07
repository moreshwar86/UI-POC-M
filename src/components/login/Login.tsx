import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../store/login";

type FieldType = {
  username?: string;
  password?: string;
  role?: string;
};
const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(
      setLoginData({
        username: values.username || "",
        password: values.password || "",
        role: "Business User",
      })
    );
    navigate("/dashboard");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-container__logo">M</div>
        <p style={{ margin: 0 }}>Sign in to Maestro</p>
        <div className="login-form">
          <Form
            name="basic"
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label={null}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Please enter your username" />
            </Form.Item>

            <Form.Item<FieldType>
              label={null}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Please enter your password" />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

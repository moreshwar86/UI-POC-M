import React from "react";
import { Form, Input, Button } from "antd";
import "./generalInfo.scss";
import { useDispatch } from "react-redux";
import { setVendorFormDetails } from "../../../store/vendor";

const GeneralInfoForm: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    dispatch(setVendorFormDetails({ generalInformDetails: values }));
  };

  return (
    <Form name="general_info" onFinish={onFinish} layout="vertical">
      <div className="general-info-form">
        <Form.Item
          label="Vendor Name"
          name="vendorName"
          rules={[{ required: true, message: "Please input the vendor name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact Person"
          name="contactPerson"
          rules={[
            { required: true, message: "Please input the contact person!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input the phone number!" },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GeneralInfoForm;

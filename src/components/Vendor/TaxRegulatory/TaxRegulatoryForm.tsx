import React from "react";
import { Form, Input, Button } from "antd";
import "./taxregulatory.scss";
import { useDispatch } from "react-redux";
import { setVendorFormDetails } from "../../../store/vendor";

const TaxRegulatoryForm: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    dispatch(setVendorFormDetails({ TaxRegulatoryormDetails: values }));
  };

  return (
    <Form name="taxregulatory_info" onFinish={onFinish} layout="vertical">
      <div className="taxregulatory-form">
        <Form.Item
          label="Field 1"
          name="field1"
          rules={[{ required: true, message: "Please input the field1 name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Field 2"
          name="field2"
          rules={[{ required: true, message: "Please input the field2!" }]}
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

export default TaxRegulatoryForm;

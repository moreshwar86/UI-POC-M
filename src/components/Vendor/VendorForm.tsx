import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import "./vendorForm.scss";
import { useSelector } from "react-redux";
import TaxRegulatoryForm from "./TaxRegulatory/TaxRegulatoryForm";
import DocumentsUploadList from "./DocumentUpload/DocumentsUploadList";
import TncSection from "./TermsConditions/TncSection";
import GeneralInfoForm from "./GeneralInfo/GeneralInfoForm";

const VendorForm: React.FC = () => {
  const vendorFormState = useSelector((state: any) => state?.vendorForm);
  console.log("vendorFormState", vendorFormState);

  const text = (id: any) => `Form Section ${id}`;

  const documents = [
    {
      title: "Document 1",
      required: true,
      fileList: [],
      onChange: (fileList: any) => {
        console.log(fileList);
      },
    },
    {
      title: "Document 2",
      required: true,
      fileList: [],
      onChange: (fileList: any) => {
        console.log(fileList);
      },
    },
  ];

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "General Information",
      children: <GeneralInfoForm />,
    },
    {
      key: "2",
      label: "Tax and Regulatory",
      children: <TaxRegulatoryForm />,
    },
    {
      key: "3",
      label: "Banking",
      children: <>Banking</>,
    },
    {
      key: "4",
      label: "Upload Documents",
      children: <DocumentsUploadList documents={documents} />,
    },
    {
      key: "5",
      label: "Code of conduct undertaking",
      children: <TncSection />,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="vendor-form-container">
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
};

export default VendorForm;

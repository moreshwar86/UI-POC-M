import { Anchor, Modal } from "antd";
import React, { useEffect, useState } from "react";
import type { FormProps } from "antd";
import { Checkbox, Form } from "antd";
import "./tnc.scss";

interface TncSectionProps {
  title?: string;
}

const tncLinks = [
  {
    title: "Privacy Policy",
    content: "This is the privacy policy content...",
  },
  {
    title: "Terms of Service",
    content: "This is the terms of service content...",
  },
];

const TncSection: React.FC<TncSectionProps> = ({
  title = "Terms & Conditions",
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [terms, setTerms] = useState(
    tncLinks.map((item) => ({
      ...item,
      checked: false,
    }))
  );
  const handleAgree = (title: string) => {
    setTerms((prevTerms) =>
      prevTerms.map((term) =>
        title === term.title ? { ...term, checked: true } : term
      )
    );
    setOpenDialog(false);
  };

  const handleClickOpen = (content: string, title: string) => {
    setSelectedContent(content);
    setSelectedTitle(title);
    setOpenDialog(true);
  };

  return (
    <div className="tnc-container">
      <div>
        {terms.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClickOpen(item.content, item.title)}
          >
            <Checkbox checked={item.checked}>{item.title}</Checkbox>
          </li>
        ))}
      </div>

      <Modal
        title={selectedTitle}
        open={openDialog}
        okText="Approve"
        onOk={() => handleAgree(selectedTitle)}
        onCancel={() => setOpenDialog(!openDialog)}
      >
        <p>{selectedContent}</p>
      </Modal>
    </div>
  );
};

export default TncSection;

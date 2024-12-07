// CustomNode.js
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import Pending from "../../../assets/icons/Pending";
import CompletedIcon from "../../../assets/icons/CompletedIcon";
import "./CustomNode.scss";
import UserIcon from "../../../assets/icons/user";
import { DateIcon } from "../../../assets/icons/Date";
import OverDueIcon from "../../../assets/icons/OverDueIcon";
import NotStartedIcon from "../../../assets/icons/NotStartedIcon";
import ReadyToStart from "../../../assets/icons/ReadyToStart";

const CustomNode = ({
  data: { dueDate, departmentName, status, requestName, name },
}: {
  data: {
    dueDate: string;
    departmentName: string;
    status: string;
    requestName: string;
    name: string;
  };
}) => {
  const getStatusIcon = () => {
    switch (status?.replace(/\s/g, "")?.toLowerCase()) {
      case "pending":
        return <Pending />;
      case "completed":
        return <CompletedIcon />;
      // case "readyforapproval":
      //   return <ReadyForApproval />;
      case "readytostart":
        return <ReadyToStart />;
      case "overdue":
        return <OverDueIcon />;
      case "notstarted":
        return <NotStartedIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="custom-node__container">
      <div className="status">
        {getStatusIcon()}
        <p>{status}</p>
      </div>
      <p className="approver">{departmentName}</p>
      <div className="detail__container">
        <UserIcon />
        <p className="value">{name}</p>
      </div>
      <div className="detail__container">
        <DateIcon />
        <p className="value">{dueDate}</p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "white", height: "0px" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "white", height: "0px" }}
      />
    </div>
  );
};
export default CustomNode;

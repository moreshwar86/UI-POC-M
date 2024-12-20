import React from "react";
import Input from "../../../FormFields/Input/Input";
import Datepicker from "../../../FormFields/Datepicker/Datepicker";
import Button from "../../../FormFields/Button/Button";
import "./RequestDetailsForm.scss";
import moment from "moment";

interface RequestDetailsFormProps {
  details?: any;
}

const RequestDetailsForm: React.FC<RequestDetailsFormProps> = ({ details }) => {
  return (
    <div className="request-details-form">
      <div className="form-section__content">
        <Input
          type="text"
          value={details?.departmentName}
          onChange={() => {}}
          name={details?.departmentName}
          label={"Department Name"}
          disabled={true}
        />
        <Input
          type="text"
          value={details?.name}
          onChange={() => {}}
          name={details?.name}
          label={"Approver Name"}
          disabled={true}
        />
      </div>
      <div className="form-section__content">
        <Input
          type="text"
          value={details?.status}
          onChange={() => {}}
          name={details?.status}
          label={"Status"}
          disabled={true}
        />
        <Datepicker
          label="Date"
          // value={String(moment(details?.dueDate).format("yyyy-dd-mm"))}
          value={String(details?.dueDate)}
          onChange={() => {}}
          disabled={true}
        />
      </div>
      <div className="form-section__footer">
        <Button disabled={true} label="Approve" />
        <Button disabled={true} label="Edit" />
      </div>
    </div>
  );
};

export default RequestDetailsForm;

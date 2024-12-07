import React, { useEffect, useRef, useState } from "react";
import FlowChart from "./Flowchart/FlowChart";
import { useDispatch, useSelector } from "react-redux";
import { hideRightSidebar } from "../../store/searchbar";
import "./RequestWorkflow.scss";
import { useParams } from "react-router-dom";
import { fetchWorkflowDetails } from "../../store/workflow/api";

const RequestWorkflow: React.FC = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state: any) => state?.searchbar);
  const workflowData = useSelector((state: any) => state?.workflowData);
  const myRequests = useSelector((state: any) => state?.myRequests);
  const { rightSidebarHidden } = searchState;

  const { id } = useParams();

  const currentRequest = myRequests?.myRequestsData?.find(
    (request: any) => request.RequestId === id
  );

  const getWorkflowDetails = async (id: any) => {
    await dispatch(fetchWorkflowDetails(id) as any);
  };

  useEffect(() => {
    dispatch(hideRightSidebar(true));
  }, []);

  useEffect(() => {
    if (id) getWorkflowDetails(id);
  }, [id]);

  console.log("workflowData", workflowData);

  let laptopReqData = [
    {
      departmentName: "Manager Review",
      name: "John Doe",
      date: "2024-15-11",
      status: "Completed",
      RequestType: "Laptop Request",
      source: "1",
      target: "2",
      x: 0,
      y: 200,
    },
    {
      departmentName: "IT Review",
      name: "Nathon lincon",
      date: "2024-17-11",
      status: "Completed",
      RequestType: "Laptop Request",
      source: "2",
      target: "3",
      x: 250,
      y: 200,
    },
    {
      departmentName: "HR review",
      name: "Johnny Depp",
      date: "2024-17-11",
      status: "Overdue",
      RequestType: "Laptop Request",
      source: "3",
      target: "4",
      x: 500,
      y: 200,
    },
    {
      departmentName: "Create PR",
      name: "Mark russell",
      date: "2024-01-12",
      status: "Pending",
      RequestType: "Laptop Request",
      source: "4",
      target: "5",
      x: 750,
      y: 200,
    },
  ];

  let renewlReqData = [
    {
      departmentName: "Procurement review",
      name: "John Doe",
      date: "2024-15-11",
      status: "Completed",
      RequestType: "Laptop Request",
      source: "1",
      target: "2",
      x: 0,
      y: 200,
    },
    {
      departmentName: "Third party risk review",
      name: "Nathon lincon",
      date: "2024-17-11",
      status: "Completed",
      RequestType: "Laptop Request",
      source: "1",
      target: "3",
      x: 250,
      y: 0,
    },
    {
      departmentName: "Security review",
      name: "Johnny Depp",
      date: "2024-17-11",
      status: "Overdue",
      RequestType: "Laptop Request",
      source: "1",
      target: "4",
      x: 250,
      y: 200,
    },
    {
      departmentName: "Legal review",
      name: "Mark russell",
      date: "2024-01-12",
      status: "Pending",
      RequestType: "Laptop Request",
      source: "2",
      target: "5",
      x: 250,
      y: 400,
    },
    {
      departmentName: "Vendor onboarding",
      name: "Albert Snowman",
      date: "2024-03-12",
      status: "Ready to start",
      RequestType: "Laptop Request",
      source: "3",
      target: "5",
      x: 500,
      y: 100,
    },
    {
      departmentName: "Contract execution",
      name: "Albert Snowman",
      date: "2023-05-12",
      status: "Ready to start",
      RequestType: "Laptop Request",
      source: "3",
      target: "6",
      x: 500,
      y: 300,
    },
    {
      departmentName: "Contract execution",
      name: "Albert Snowman",
      date: "2023-05-12",
      status: "Ready to start",
      RequestType: "Laptop Request",
      source: "4",
      target: "6",
      x: 500,
      y: 300,
    },
    {
      departmentName: "Create PR",
      name: "Albert Snowman",
      date: "2023-07-12",
      status: "Not started",
      RequestType: "Laptop Request",
      source: "5",
      target: "8",
      x: 750,
      y: 200,
    },
    {
      departmentName: "Create PR",
      name: "Albert Snowman",
      date: "2023-07-12",
      status: "Not started",
      RequestType: "Laptop Request",
      source: "7",
      target: "8",
      x: 750,
      y: 200,
    },
  ];

  return (
    <>
      <div
        className={`request-workflow__container ${
          rightSidebarHidden && "expanded-request-workflow"
        }`}
      >
        {workflowData && (
          <>
            <div className="request-workflow__title">
              {currentRequest.RequestId} - {currentRequest.RequestType}
            </div>
            {/* <FlowChart reqDetails={workflowData?.workflowDeatils} /> */}
            <FlowChart
              reqDetails={id == "ID12434" ? laptopReqData : renewlReqData}
            />
          </>
        )}
      </div>
    </>
  );
};

export default RequestWorkflow;

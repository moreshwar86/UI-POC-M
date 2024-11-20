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
            <FlowChart reqDetails={workflowData?.workflowDeatils} />
          </>
        )}
      </div>
    </>
  );
};

export default RequestWorkflow;

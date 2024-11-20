import axios from "axios";
import {
  fetchWorkflowDetailsRequest,
  fetchWorkflowDetailsSuccess,
  fetchWorkflowDetailsFailure,
} from "./actions";
import { API_URL } from "../../constants/url_constants";
import workflowResponse from "../mockResponses/workflowDetails.json";
// Thunk action to fetch user data
export const fetchWorkflowDetails = (id: string) => {
  return async (dispatch: any) => {
    dispatch(fetchWorkflowDetailsRequest());
    try {
      const response = await axios.get(
        API_URL.fetchWorkflowDetails.replace(":id", id)
      );
      dispatch(fetchWorkflowDetailsSuccess(response.data));
      //dispatch(fetchWorkflowDetailsSuccess(workflowResponse.data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchWorkflowDetailsFailure(error.message));
      } else {
        dispatch(fetchWorkflowDetailsFailure("An unknown error occurred"));
      }
    }
  };
};

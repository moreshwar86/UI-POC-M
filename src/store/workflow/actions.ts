// store/userActions.js
import axios from "axios";
import {
  FETCH_WORKFLOW_DETAILS_REQUEST,
  FETCH_WORKFLOW_DETAILS_SUCCESS,
  FETCH_WORKFLOW_DETAILS_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

// Action types

// Action creators
export const fetchWorkflowDetailsRequest = () => ({
  type: FETCH_WORKFLOW_DETAILS_REQUEST,
});
export const fetchWorkflowDetailsSuccess = (res: any) => ({
  type: FETCH_WORKFLOW_DETAILS_SUCCESS,
  payload: res,
});
export const fetchWorkflowDetailsFailure = (error: any) => ({
  type: FETCH_WORKFLOW_DETAILS_FAILURE,
  payload: error,
});

export const setSearchbarData = (data: any) => ({
  type: SET_SEARCHBAR_DATA,
  payload: data,
});

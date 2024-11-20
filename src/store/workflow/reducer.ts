import {
  FETCH_WORKFLOW_DETAILS_REQUEST,
  FETCH_WORKFLOW_DETAILS_SUCCESS,
  FETCH_WORKFLOW_DETAILS_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

const initialState = {
  loading: false,
  isSeached: false,
  error: null,
  workflowDeatils: undefined,
};

export const workflowReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_WORKFLOW_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WORKFLOW_DETAILS_SUCCESS:
      console.log("FETCH_WORKFLOW_DETAILS_SUCCESS", action);

      return {
        ...state,
        loading: false,
        workflowDeatils: action.payload,
        error: null,
      };
    case FETCH_WORKFLOW_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        workflowDeatils: {},
      };
    case SET_SEARCHBAR_DATA:
      return { ...state, isSeached: action.payload };

    default:
      return state;
  }
};

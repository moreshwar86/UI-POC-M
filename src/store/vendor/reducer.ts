import { hideRightSidebar } from "../searchbar";
import {
  // FETCH_TODOLIST_REQUEST,
  // FETCH_TODOLIST_SUCCESS,
  // FETCH_TODOLIST_FAILURE,
  HIDE_RIGHTSIDEBAR,
  SET_VENDOR_FORM_DETAILS,
} from "./types";

const initialState = {
  loading: false,
  hideRightSidebar: false,
  vendorFormDetails: {},
};

export const vendorReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    // case FETCH_TODOLIST_REQUEST:
    //   return { ...state, loading: true, error: null };
    // case FETCH_TODOLIST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     todoList: action.payload,
    //     error: null,
    //   };
    // case FETCH_TODOLIST_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //     todoList: {},
    //   };
    case HIDE_RIGHTSIDEBAR:
      return { ...state, isSeached: action.payload };

    case SET_VENDOR_FORM_DETAILS:
      return {
        ...state,
        vendorFormDetails: { ...state.vendorFormDetails, ...action.payload },
      };

    default:
      return state;
  }
};

// store/userActions.js
import axios from "axios";
import {
  // FETCH_TODOLIST_REQUEST,
  // FETCH_TODOLIST_SUCCESS,
  // FETCH_TODOLIST_FAILURE,
  HIDE_RIGHTSIDEBAR,
  SET_VENDOR_FORM_DETAILS,
} from "./types";

// Action types

// Action creators
// export const fetchTodoListRequest = () => ({
//   type: FETCH_TODOLIST_REQUEST,
// });

export const setVendorFormDetails = (data: any) => ({
  type: SET_VENDOR_FORM_DETAILS,
  payload: data,
});

export const setHideRightSideBar = (data: any) => ({
  type: HIDE_RIGHTSIDEBAR,
  payload: data,
});

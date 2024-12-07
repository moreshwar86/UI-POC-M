// store/userActions.js
import { SET_LOGIN_DATA } from "./types";

export const setLoginData = (data: any) => ({
  type: SET_LOGIN_DATA,
  payload: data,
});

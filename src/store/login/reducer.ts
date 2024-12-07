import { SET_LOGIN_DATA } from "./types";

const initialState = {
  loading: false,
  isSeached: false,
  error: null,
  summaryDetails: undefined,
};

export const loginReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
};

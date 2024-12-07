import { thunk } from "redux-thunk";
import { searchbarReducer } from "./searchbar";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { summaryReducer } from "./summary";
import { todoListReducer } from "./todoList";
import { myRequestsReducer } from "./myRequests";
import { workflowReducer } from "./workflow";
import { vendorReducer } from "./vendor";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
    searchbar: searchbarReducer,
    summaryData: summaryReducer,
    todoListData: todoListReducer,
    myRequests: myRequestsReducer,
    workflowData: workflowReducer,
    vendorForm: vendorReducer,
    loginDetails: loginReducer,
  }),
  store = createStore(rootReducer, {}, applyMiddleware(thunk as any));

// export type AppState = ReturnType<typeof rootReducer>;

// export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

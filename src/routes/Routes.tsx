import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import App from "../App";
import RequestWorkflow from "../components/RequestWorkflow/RequestWorkflow";
import RequestDetailsForm from "../components/RequestWorkflow/RequestDetailsForm/RequestDetailsForm";
// import FileEditor from "../components/FIleEditor/FileEditor";
import RequestPrForm from "../components/RequestWorkflow/RequestPrForm/RequestPrForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SearchBar />,
      },
      {
        path: "/my-requests/:id",
        element: <RequestWorkflow />,
      },
      {
        path: "/request-details",
        element: <RequestDetailsForm />,
      },
      {
        path: "/pr",
        element: <RequestPrForm />,
      },
    ],
  },
]);

export default router;

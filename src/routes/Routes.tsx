import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import App from "../App";
import RequestWorkflow from "../components/RequestWorkflow/RequestWorkflow";
import RequestDetailsForm from "../components/RequestWorkflow/RequestDetailsForm/RequestDetailsForm";
// import FileEditor from "../components/FIleEditor/FileEditor";
import RequestPrForm from "../components/RequestWorkflow/RequestPrForm/RequestPrForm";
import Login from "../components/login/Login";
import VendorForm from "../components/Vendor/VendorForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <App />,
    // element: <VendorForm />,
    children: [
      {
        path: "/dashboard",
        element: <SearchBar />,
      },
      {
        path: "/dashboard/my-requests/:id",
        element: <RequestWorkflow />,
      },
      {
        path: "/dashboard/request-details",
        element: <RequestDetailsForm />,
      },
      {
        path: "/dashboard/pr",
        element: <RequestPrForm />,
      },
      {
        path: "/dashboard/vendorForm",
        element: <VendorForm />,
      },
    ],
  },
]);

export default router;

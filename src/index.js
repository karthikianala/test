import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhlXVpHaV1EQmFJfFBmQGlYf1R1fEU3HVdTRHRcQl9hTX5Wd0RiXnpYcXU=;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RBQmFPYVF2R2BJelRxdF9DaEwgOX1dQl9gSXxRckVmWH5fd3FSQ2E=;ORg4AjUWIQA/Gnt2VVhkQlFac15JXnxLeEx0RWFab1t6dVVMZVRBNQtUQF1hSn5RdEFjXH5fcXNQT2hd;MTE5NzE2N0AzMjMwMmUzNDJlMzBZLzFjME4rOC80TWMzQlFTN2V6c0oyOG4zTnVOMm94bko1OXZmYmRxbGcwPQ==;MTE5NzE2OEAzMjMwMmUzNDJlMzBFMGpHbHZKeGQxblJ1UnZJczYxRTBYOG1VL1U2M1hKcktLZm9EcFdUSGNzPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmBWfFVpR2NbfE51flRGallZVAciSV9jS31TdEdnWXpfcXVSQGZeUA==;MTE5NzE3MEAzMjMwMmUzNDJlMzBXVkdDcStzcGp4K2h5WUVHRU5ZME5sN1pORDJrRmJUSUVQeUVkWHM5R3RRPQ==;MTE5NzE3MUAzMjMwMmUzNDJlMzBuOTVBS2JUZWxVTnpIR05KUXFpbFNFNlN1NGJDTXpSVjQzaUNaRVFZcFRFPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXnxLeEx0RWFab1t6dVVMZVRBNQtUQF1hSn5RdEFjXH5fcXNSRGdc;MTE5NzE3M0AzMjMwMmUzNDJlMzBpaWxqVjFIU2dsdTdMQmJRaVJBNktqczVTRm9aRHpPbWFLR3BqWDVjTkdJPQ==;MTE5NzE3NEAzMjMwMmUzNDJlMzBvQk1lRHFsYzJhWm1vcE5YSVU4UkRVWTR0NHo4YVlUYVdVblRMZXRNcm5ZPQ==;MTE5NzE3NUAzMjMwMmUzNDJlMzBXVkdDcStzcGp4K2h5WUVHRU5ZME5sN1pORDJrRmJUSUVQeUVkWHM5R3RRPQ=="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

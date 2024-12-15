// DO NOT TOUCH THE BELOW LINE
// import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDom from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./redux/Store";
import { SnackbarProvider } from "notistack";

// DO NOT TOUCH THE BELOW 3 LINES
// if (window.Cypress) {
//   window.store = store;
// }

// WRITE YOUR CODE HERE
 
const snackbarPos = {
  vertical: "bottom",
  horizontal: "center",
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <SnackbarProvider anchorOrigin={snackbarPos} autoHideDuration={2000} maxSnack={2}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </React.StrictMode> 
  </Provider>
)
// DO NOT TOUCH THE BELOW LINE
// reportWebVitals();

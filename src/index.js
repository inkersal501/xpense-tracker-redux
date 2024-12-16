// DO NOT TOUCH THE BELOW LINE
// import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDom from "react-dom/client";
 
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

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <SnackbarProvider anchorOrigin={snackbarPos} autoHideDuration={2000} maxSnack={2}>
        <App />
      </SnackbarProvider>
    </React.StrictMode> 
  </Provider>
)
// DO NOT TOUCH THE BELOW LINE
// reportWebVitals();

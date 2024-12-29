 
import React from "react";
import ReactDom from "react-dom/client";
import "@fontsource/roboto";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./redux/Store"; 
 
  
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode> 
        <App /> 
    </React.StrictMode> 
  </Provider>
)
 
import React from "react";
import "./scss/app/index.scss";
import App from "./core/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
const ReactDOM = require("react-dom/client");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

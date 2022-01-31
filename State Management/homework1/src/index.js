import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import "todomvc-app-css/index.css";
import App from "./components/App";

// !TODO: Create Store here
const store = createStore(rootReducer);

// !TODO: Add Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

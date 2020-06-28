import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer as mazeReducer } from "./reducers/mazeReducer.js";
import App from "./App.js";
import "./index.css";

const store = { maze: createStore(mazeReducer) };

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store.maze}>
    <App />
  </Provider>,
  rootElement
);

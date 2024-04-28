
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import {StateProvider} from  "./context/StateProvider.js";
import { BrowserRouter as Router } from "react-router-dom";
import {initialState} from "./context/initalState.js"
import reducer from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
        <App />
        </StateProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


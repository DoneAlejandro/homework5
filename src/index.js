import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialState = {
  count: 0,
};
const renducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: ++state.count,
      };
    case "remove":
      return {
        ...state,
        count: --state.count,
      };
    default:
      return state;
  }
};
const store = createStore(renducer);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

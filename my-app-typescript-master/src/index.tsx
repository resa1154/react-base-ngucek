import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import axios from "axios";

export interface ApiErrorResponse<T> {
  statusCode: string;
  data?: T;
  message?: string;
}

// intercept every axios response whne error occured
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("AXIOS INTERCEPTOR - ERROR OCCURED");
    console.error(error);

    if (error.response) {
      const { response } = error;

      return Promise.reject({
        data: response.data,
        statusCode: response.status,
      } as ApiErrorResponse<any>);
    } else if (error.request) {
      return Promise.reject({
        message: "The server can't be reached.",
        statusCode: "0",
      } as ApiErrorResponse<undefined>);
    } else {
      return Promise.reject({
        message: "There was an error processing the request. " + error.message,
        statusCode: "0",
      } as ApiErrorResponse<undefined>);
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

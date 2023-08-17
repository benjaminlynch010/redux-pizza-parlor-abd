import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

//setup Redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

//Cart Reducer
const cart = (state = 0, action) => {
  if (action.type === "ADD_PIZZA") {
    return action.payload;
  }

  if (action.type === "REMOVE_PIZZA") {
    return action.payload;
  }

  if (action.type === "EMPTY_CART") {
    return [];
  }
  return state;
};

//Customer info Reducer
const customerInfo = (state = 0, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return action.payload;
  }
  if (action.type === "EMPTY_CART") {
    return [];
  }
  return state;
};

//The store that holds all the info for our app
const storeInstance = createStore(
  combineReducers({
    cart,
    customerInfo,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

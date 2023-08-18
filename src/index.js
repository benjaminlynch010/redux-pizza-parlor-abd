import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

//setup Redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

//Cart Reducer
const cart = (state = [], action) => {
  if (action.type === "ADD_PIZZA") {
    return [...state, action.payload];
  }

  if (action.type === "REMOVE_PIZZA") {
      const removePizza = state.filter((pizza) => pizza.id !== action.payload.id)
    return removePizza;
  }

  if (action.type === "EMPTY_CART") {
    return [];
  }
  return state;
};

//Total Reducer
// I though since we didnt have a value to pass for total that maybe i should build one out.
// this will target and type "ADD_PIZZA" and add each payload.price on itself and return that value
const total = (state = 0, action) => {
  if (action.type === "ADD_PIZZA") {
    const amount = action.payload.price; 
    
    return state + parseFloat(amount)  ;
  }
  
  return state;
};

//Customer info Reducer
const customerInfo = (state = [], action) => {
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
    total
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

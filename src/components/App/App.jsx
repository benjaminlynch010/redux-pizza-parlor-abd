import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>

      <Router>
        <div>
          <ul className="nav">
            <Link to="/">Home</Link>
            <Link to="/form">Customer Info</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/admin"></Link>
          </ul>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <CustomerForm />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;

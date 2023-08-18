import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Checkout() {

  const customerInfo = useSelector((store) => store.customerInfo)
  const cart = useSelector((store) => store.cart)
  const total = useSelector((store) => store.total)

  const objectToSend = {
    customer_name: customerInfo.customer_name,
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    // Hardcoded placeholder
    type: "Delivery",
    total: total,
    pizzas: [{ cart : cart.id, quantity: 1 }] 
  }

  console.log(`POSTing this : ${objectToSend.city}`)

  const handleCheckout = (event) => {

    axios.post("/order")
    .then((response) => {
      console.log("POST request ✅");
      })
      .catch((error) => {
      console.log(`Error making POST :  ${error}`);
      });
  } 

  return (
    <table>
      <tbody>
        <tr>
          <td>Customer :</td>
          <td>{customerInfo}</td>
        </tr>
        <tr>
          <td>Cart :</td>
          <td>{cart}</td>
        </tr>
        <tr>
          <td>Total :</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Checkout;

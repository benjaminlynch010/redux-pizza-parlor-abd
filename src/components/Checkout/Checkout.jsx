import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";


function Checkout() {
  

  const customerInfo = useSelector((store) => store.customerInfo)
  const cart = useSelector((store) => store.cart)
  const total = useSelector((store) => store.total)
  const history = useHistory(); // Ses the useHistory function to a variable we can use.
  


  const objectToSend = {
    customer_name: customerInfo.customer_name,
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    // Hardcoded placeholder
    type: customerInfo.type,
    total: total,
    pizzas: [{ cart : cart.id, quantity: 1 }] 
  }

  console.log(`POSTing this : ${customerInfo.customer_name}`)
  console.log(`POSTing this : ${cart}`)



  const handleCheckout = (event) => {

    axios.post("/api/order", objectToSend)
    .then((response) => {
      console.log("POST request ✅");
      })
      .catch((error) => {
      console.log(`Error making POST :  ${error}`);
      });
      history.push("/");
  } 

  return (
    <>
    <table>
      
      <tbody>
        <tr>
          <td>Customer :</td>
          <td>{customerInfo.customer_name}</td>
        </tr>
        <tr>
          <td>Cart :</td>
          <td>{cart[0].name}</td>
        </tr>
        <tr>
          <td>Total :</td>
          <td>{total}</td>
        </tr>
        
      </tbody>
    </table>
    <button onClick={handleCheckout}>CHECKOUT</button>
    </>
    
  );
    
    
}

export default Checkout;

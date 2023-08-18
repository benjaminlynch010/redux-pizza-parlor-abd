import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


function CustomerForm() {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);
  const total = useSelector((store) => store.total); // passed the total reducer.


  const [infoToAdd, setInfoToAdd] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    type: '',
    total: total,
  });
  // console.log(infoToAdd)
// I changed the info we were sending to be very specific instead of being just an array of objects.
// I instead targeted each individual item with dot notation.
// this worked but i forgot to actually select pizzas so it was not including the total price.
// after i selected pizzas i got an error the the "quantity" could not be null. 
// so i added a quantity to the pizzas arraty after cart and it worked.
  const customerNext = (event) => {
    event.preventDefault();
    let newOrder = {
      customer_name: infoToAdd.customer_name,
      street_address: infoToAdd.street_address,
      city: infoToAdd.city,
      zip: infoToAdd.zip,
      type: infoToAdd.type, // hard coded. This needs to be changed by the radial buttons
      total: total,
      // pizzas: [{cart: cart, quantity: 1}] //I wonder if i should do cart.id instead of just cart?
    };
   
      console.log(cart)
      // TODO: Clear the cart and navigate to the product page
      dispatch({ type: "ADD_CUSTOMER", payload: newOrder}); // THERE IS NO PAYLOAD TO SEND this is simply targeting the type in the store reducer.
     
  
    
  };

  const handleNameChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      customer_name: event.target.value,
    });
  };

  const handleStreetAddressChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      street_address: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      city: event.target.value,
    });
  };

  const handleZipChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      zip: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    setInfoToAdd({
      ...infoToAdd,
      type: event.target.value,
    });
    console.log("inside type change", infoToAdd.type )
  };

  return (
    // Made a form with 4 inputs. Each input will handle the data the user enters into the field.
    // Each input has an onChange that triggers a function above.
    // The Button onSubmit is tied to the form intself
    <>
    {/* Added a total section */}
    <h1>Total: {total}</h1>
    <form onSubmit={(event) => customerNext(event)}>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="name"
        // value={infoToAdd.name}
      />

      <input
        onChange={handleStreetAddressChange}
        type="text"
        placeholder="Street Address"
        // value={infoToAdd.street}
      />

      <input
        onChange={handleCityChange}
        type="text"
        placeholder="city"
        // value={infoToAdd.city}
      />

      <input
        onChange={handleZipChange}
        type="text"
        placeholder="zip"
        // value={infoToAdd.zip}
      />

    
      <label>
        <input type="radio" name="Pickup" value="Delivery" checked={infoToAdd.type === 'Delivery'} onChange={handleTypeChange}/> Delivery
      </label>
      <label>
        <input type="radio" name="Delivery" value="Pickup" checked={infoToAdd.type === 'Pickup'} onChange={handleTypeChange} /> Pickup
      </label>

      <button type="submit">NEXT</button>
    </form>
    </>
    
  );
}

export default CustomerForm;

//Test push

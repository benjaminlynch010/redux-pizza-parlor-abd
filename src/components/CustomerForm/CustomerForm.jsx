import React, { useState } from 'react'
import axios from 'axios'

function CustomerForm() {

  const [infoToAdd, setInfoToAdd] = useState({ name: '', street: '', city: '', zip: '', type: '', total: '' })


  const customerNext = (event) => {
    axios.post('/order', infoToAdd)
      .then((response) => {
        // setInfoToAdd()
      })
      .catch((error) => {
        console.error(`POST Error : ${error}`)
      })
      
  }

    const handleNameChange = (event) => {
      setInfoToAdd({
        ...infoToAdd,
        name: event.target.value,
      })
    }

    const handleStreetAddressChange = (event) => {
      setInfoToAdd({
        ...infoToAdd,
        street: event.target.value,
      })
    }

    const handleCityChange = (event) => {
      setInfoToAdd({
        ...infoToAdd,
        city: event.target.value,
      })
    }

    const handleZipChange = (event) => {
      setInfoToAdd({
        ...infoToAdd,
        zip: event.target.value,
      })   
    }
    
    const handleTypeChange = (event) => {
      setInfoToAdd({
        ...infoToAdd,
        type: event.target.value
      })
    }







  return (

    // Made a form with 4 inputs. Each input will handle the data the user enters into the field.
    // Each input has an onChange that triggers a function above.
    // The Button onSubmit is tied to the form intself
    <>
      <form onSubmit={(event) => customerNext(event)}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="name"
          value={.name}
        />

        <input
          onChange={handleStreetAddressChange}
          type="text"
          placeholder="Street Address"
          value={.street}
        />

        <input
          onChange={handleCityChange}
          type="text"
          placeholder="city"
          value={.city}
        />

        <input
          onChange={handleZipChange}
          type="text"
          placeholder="zip"
          value={.zip}
        />

        {/* TRUE/FALSE toggle? */}
        <input type="radio" value="delivery">Delivery</input>
        <input type="radio" value="pickup">Pickup</input>

        <button type="submit">NEXT</button>
      </form>
    </>
  );
}

export default CustomerForm;


//Test push
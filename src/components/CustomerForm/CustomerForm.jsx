function CustomerForm() {

    const handleNameChange = (event) => {

    }

    const handleStreetAddressChange = (event) => {
        
    }

    const handleCityChange = (event) => {
        
    }

    const handleZipChange = (event) => {
        
    }

    const customerNext = (event) => {
        
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

        <button type="submit">NEXT</button>
      </form>
    </>
  );
}

export default CustomerForm;


//Test push
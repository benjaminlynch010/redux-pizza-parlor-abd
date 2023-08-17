import { useState, useEffect } from "react";
import React from "react";


function Pizza({pizzaitem}) {

    const [addOrRemove, setAddOrRemove] = useState(true);

    function handleAddClick() {
        console.log('inside of handleAddClick')
        setAddOrRemove(!addOrRemove);
    }

    return (<>
    <h1>
        mapped pizza items will go here
    </h1>
    <button onClick={() => handleAddClick(pizzaitem.id)}>
          {addOrRemove ? ("Add") : ("Remove")}
        </button>
    
    
    </>)
}


export default Pizza;
import { useState, useEffect } from "react";
import React from "react";


function Pizza({pizzaItem}) {

    const [addOrRemove, setAddOrRemove] = useState(true);

    function handleAddClick() {
        console.log('inside of handleAddClick')
        setAddOrRemove(!addOrRemove);
    }

    return (<>
    <h1>
        {pizzaItem.name}{pizzaItem.price}<img src={pizzaItem.image_path}></img>
    </h1>
    <button onClick={() => handleAddClick(pizzaItem.id)}>
          {addOrRemove ? ("Add") : ("Remove")}
        </button>
    
    
    </>)
} 

// test push


export default Pizza;
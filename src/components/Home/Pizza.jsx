import { useState, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";


function Pizza({pizzaItem}) {

    const dispatch = useDispatch()

    const [addOrRemove, setAddOrRemove] = useState(true);

    function handleAddClick() {
        console.log('inside of handleAddClick')
        setAddOrRemove(!addOrRemove);
        if(addOrRemove){
            dispatch({
                type:"ADD_PIZZA",
                payload:pizzaItem
            })
        }
        else{
            dispatch({
                type:"REMOVE_PIZZA",
                payload:pizzaItem
            })
        }
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
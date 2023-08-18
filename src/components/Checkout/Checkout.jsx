import React, { useState } from "react"
import axios from 'axios'


function Checkout() {

  axios.post('/api/order', newOrder)
    .then((response) => {
      
    })

    return (<>
    <table>
      <thead>
        <th>Name</th>
        <th>Cost</th>
      </thead>
    </table>
    
    </>)
}


export default Checkout;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pizza from './Pizza'
// import { useDispatch } from 'react-redux';


function Home() {
  // const dispatch = useDispatch();

  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => {
    fetchPizzaList()
  }, [])

  const fetchPizzaList = () => {
    axios.get('/api/pizza')
      .then((response) => {
      setPizzaList(response.data)
      })
      .catch((error) => {
        console.error(`Error retrieving pizza list : ${error}`)
      })
      // dispatch({ type: "ADD_PIZZA", payload: pizzaList});
  }

  return (<>
    <div>
      {pizzaList.map((pizzaItem) => (
        <Pizza key={pizzaItem.id} pizzaItem={pizzaItem} />
      ))}
    </div>

  </>)
}


export default Home;
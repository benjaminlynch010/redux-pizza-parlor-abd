import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pizza from './Pizza'

function Home() {

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
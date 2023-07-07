import axios from 'axios'
import React from 'react'
import CoinCard from '../components/CoinCard'
import Navbar from '../components/Navbar'

const Popular = () => {

  const [trending, setTrending] = React.useState([])
  
  const fetchTrendingCoins  = async () => {
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    let response = await axios.get(url);
    setTrending(response.data)
  }

  React.useEffect(()=>{
    fetchTrendingCoins()
  }, [])

  const cards = trending.map(card => {

    let profit = card.price_change_percentage_24h>=0;
    let element = <span>{profit && "+"} {card.price_change_percentage_24h.toFixed(2)}%</span>
    
    return (<CoinCard img = {card.image}
    price = {card.current_price.toLocaleString("en-US")}
    title = {card.name}
    change = {element}
    profit = {profit}
    id = {card.id}
    />
  )})

  return (
    <div>
      <Navbar/>
      <div className='text-center px-20 pt-2'>
        <h1 className='text-5xl text-teal-50 font-bold mt-2 pb-5 leading-10'>Trending Currencies</h1>
      </div>  
      <div className='gp-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-5 my-5'> 
        {cards}
      </div>
    </div>
  )
}

export default Popular

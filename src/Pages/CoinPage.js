import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import CoinInfo from '../components/CoinInfo';
import parse from 'html-react-parser';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';

const CoinPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [coin, setCoin] = useState();
    
    const fetchCoin = async () => {
      try{
        let url = `https://api.coingecko.com/api/v3/coins/${id}`
        const { data } = await axios.get(url);
        setCoin(data);
      }catch (error) {
        navigate('/err')
      }  
    };
    
    React.useEffect(() => {
        fetchCoin();
    }, [])
    console.log(coin)

    if(!coin) return <h1>Loading</h1>
    

  return (
    <div>
      <div>
        <Navbar/>
        <InfoCard
          name={coin?.name}
          description = {parse(coin?.description.en.split(". ")[0])}
          img = {coin?.image.large}
          rank = {coin?.market_cap_rank}
          price = {coin?.market_data.current_price.inr.toLocaleString('en-US')}
          cap = {coin?.market_data.market_cap.inr.toLocaleString('en-US').slice(0, -6)}
        />
      </div>
      
      
      <div class="max-w-screen-xl mx-auto rounded-lg mt-4 mb-8 border-2 border-white backdrop-blur-2xl shadow-xl overflow-hidden">
        
          <CoinInfo coin ={coin}/>
      </div>

    </div>
  )
}

export default CoinPage

// <img src = {coin?.image.large} alt={coin?.name} height="200" className='mb-5'/>
// <h3 className='text-5xl font-bold mb-5' >{coin?.name}</h3>
//  <p className='pb-3.5 px-6 text-justify'>{parse(coin?.description.en.split(". ")[0])}</p>
//  <span className='flex self-start px-6 pt-2'>
//      <h3 className='text-2xl font-bold mb-5 mr-3'>Rank: </h3>
//      <h3 className='text-2xl mb-5' > {coin?.market_cap_rank} </h3>
//  </span>
//  <span className='flex self-start px-6'>
//      <h3 className='text-2xl font-bold mb-5 mr-3 ' >Current Price: </h3>
//      <h3 className='text-2xl mb-5' > ₹ {coin?.market_data.current_price.inr.toLocaleString('en-US')} </h3>
//  </span>
//  <span className='flex self-start px-6'>
//      <h3 className='text-2xl font-bold mb-5 mr-3 ' >Market Cap: </h3>
//      <h3 className='text-2xl mb-5' > ₹ {coin?.market_data.market_cap.inr.toLocaleString('en-US').slice(0, -6)} M</h3>
//  </span>        

{/* <div > 
  <CoinInfo coin={coin} />
</div> */}
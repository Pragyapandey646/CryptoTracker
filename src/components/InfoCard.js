import React from 'react'

const InfoCard = (props) => {
  return (
    <div class="max-w-screen-xl mx-auto p-6  border-2 border-white backdrop-blur-2xl rounded-lg shadow-xl ">
      <div class="flex items-center rounded-t-lg flex-col md:flex-row ">
        <img src={props.img} alt="Card image" class="rounded-t-lg"/>
        <div class="px-4 py-4 w-full mx-15">
          <h1 className='text-5xl text-yellow-400 font-bold mb-5'>{props.name}</h1>
          <p className='pb-3.5 text-white text-justify'>{props.description}</p>
          <h1 className='text-2xl text-white font-bold mb-5 mr-3'>Rank: {props.rank}</h1>
          <h1 className='text-2xl  text-white font-bold mb-5 mr-3'>Current Price: {props.price}</h1>
          <h1 className='text-2xl text-white font-bold mb-5 mr-3'>Market Cap: {props.cap} M</h1>
        </div>
      </div>
    </div>

  )
}

export default InfoCard

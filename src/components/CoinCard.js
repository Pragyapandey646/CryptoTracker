import React from 'react'
import { useNavigate } from 'react-router-dom';

const CoinCard = (props) => {
  console.log(props.profit)
  const navigate = useNavigate();
  return (
    <div>
        <div className="flex justify-center my-4 px-4 cursor-pointer" onClick={() => navigate(`/${props.id}`)}>
            <div className="rounded-lg shadow-lg backdrop-blur-2xl border-2 border-white max-w-sm">
            <img className="rounded-t-md h-45 w-full object-cover" src= {(props.img)} alt=""/>
            <div className="p-6">
                <h5 className="text-white text-xl font-medium mb-2 text-center">{props.title}</h5>
                <p className="text-white px-4 text-center">₹ {props.price}</p>
                <p className="px-4 text-center" style = {{ color: props.profit? "green" : "red"}}>{props.change}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CoinCard

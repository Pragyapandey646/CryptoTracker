import React from 'react'
import {useNavigate} from "react-router-dom"
import logo from "../images/logo.png"
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav class="flex justify-between px-20 py-5 items-center">
        <img src = {logo} className="h-12 w-12 cursor-pointer" onClick={() => navigate('/')}/>
        <div class="flex items-center">
            <ul class="flex items-center space-x-6">
            <li class="font-semibold text-white cursor-pointer" onClick={() => navigate('/popular')}>Trending</li>
            <li class="font-semibold text-white cursor-pointer" onClick={() => navigate('/news')}>News</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

//<h1 class="text-3xl text-white font-bold cursor-pointer" onClick={() => navigate('/')}>CrypTracker</h1>
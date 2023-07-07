import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';

const Homepage = () => {

  const navigate = useNavigate();
  const [search, setSearch] = React.useState("")

  const handleChange = (event) => {
    const {value} = event.target
    setSearch(value.toLowerCase())
  }
  console.log(search)
  const enter = (event) =>{
    if(event.key === "Enter"){
      navigate(`./${search}`)
    }
  } 
  
  return (
    <>
    <Navbar/>
    <div className="max-w-8xl container relative mx-auto my-20">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
          <h1 className="block antialiased tracking-normal font-sans text-6xl leading-tight text-white mb-6 font-black">CrypTracker</h1>
          <p className="block antialiased font-sans text-2xl font-normal leading-relaxed text-white opacity-80">Your one stop for all the Cryptocurrency details.</p>
            <div class='max-w-md mx-auto mt-8'>
              <div class="relative flex items-center w-full h-12 rounded-lg border-blue-700 border-2 focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={handleChange}
                onKeyDown = {enter}
                value = {search}
                placeholder="Search for Crypto.." /> 
              </div>
            </div>
          </div>
      </div>
    </div>
      <ParticleBackground/>
    </>
    
  )
}

export default Homepage

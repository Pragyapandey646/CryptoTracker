import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import News from "./Pages/News"
import Popular from "./Pages/Popular"
import CoinPage from "./Pages/CoinPage"
import Err404 from "./Pages/Err404";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path ='/news' element={<News/>}/>
          <Route path ='/popular' element={<Popular/>}/>
          <Route path = 'err' element = {<Err404/>}/> 
          <Route path ='/:id' element={<CoinPage/>} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

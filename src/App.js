import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Pricelist from './Pages/Pricelist/Pricelist';
import Booking from './Pages/Booking/Booking';




const App = () => {
  return (
    <div>
     <Router>
     <Navbar/>
< Routes>
<Route path="/" element={<Home/>} /> 

<Route path="/Pricelist" element={<Pricelist/>} /> 
<Route path="/Booking" element={<Booking/>} />

</Routes>
     </Router>
    </div>
  )
}

export default App
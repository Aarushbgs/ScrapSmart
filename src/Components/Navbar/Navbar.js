import React, { useState } from 'react'
import'./Navbar.css'
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Navbar = () => {
const [isOpen, setisOpen] = useState(false);
const togglemenu=()=>{
    setisOpen(!isOpen);
} 



  return (
   <nav className='main-nav'>
    <div className='logo'>
    ScrapSmart
    </div>
<div className={`nav-link ${isOpen?`active`:``}`}>
<ul>

<li>

<Link to="/">
    Home
</Link>

</li>

<li>
<Link to="/Pricelist">
        PriceList
    </Link>
</li>

<li>
<Link to="/Booking">
        Book Pickup
    </Link>
</li>
    


</ul>
</div>
<div className='menu-toggle' onClick={togglemenu}>
<RiMenu3Fill />
</div>
   </nav>
  )
}

export default Navbar
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='main-header'>
        <div className='left-header'>
        Sell Your
Scrap <span>Online</span> 
  One Window Solution
<span>ScrapSmart</span>

<Link to="/Pricelist">
<button className='button'>
PriceList
</button>
</Link>

<Link to="/Booking">
<button className='button'>
  Book Pickup
</button>
</Link>


        </div>
        <div className='right-header'>
            
        </div>
    </div>
  )
}

export default Header
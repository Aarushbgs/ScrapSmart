import React from 'react'
import './Service.css'
import Booking from '../../img/Booking.png'
import Money from '../../img/Money.png'
import PickUp from '../../img/Pickup.png'



const Service = () => {
  return (
    <div className='main-service'>
        <h1 className='work'>How its <span>Works</span> ?</h1>


        <div className='main-box'>
        <div className='box'>
        <img src={Booking}/>
        <p>Book a PickUp</p>
    </div>

    <div className='box'>
        <img src={PickUp}/>
        <p>Executive will be at
your door step to collect the stuff</p>
    </div>

       <div className='box'>
        <img src={Money}/>
        <p>Get Paid in Cash OR Donate for Education</p>
    </div>
        </div>
   
    </div>
  )
}

export default Service
import React from 'react'
import './Pricelist.css'
import book from '../../img/Book.png';
import bottle from '../../img/bottle.png';
import copper from '../../img/Copper.png';
import news from '../../img/News.png';
import tin from '../../img/tin.png';
import cartoon from '../../img/cartoon.png';
import waste from '../../img/E-waste.png';
import poly from '../../img/polythene.png';
import iron from '../../img/iron.png';


const Pricelist = () => {

  const items = [
    {
      id: 1,
      name: 'Book',
      price: 25,
      imgUrl: book
    },

    {
      id: 2,
      name: 'Bottle',
      price: 25,
      imgUrl: bottle
    },

    {
      id: 3,
      name: 'Copper',
      price: 25,
      imgUrl: copper
    },
    {
      id: 4,
      name: 'Newspaper',
      price: 25,
      imgUrl: news
    },
    {
      id: 5,
      name: 'Tin',
      price: 25,
      imgUrl: tin
    },
    {
      id: 6,
      name: 'Cartoon',
      price: 25,
      imgUrl: cartoon
    },
    {
      id: 7,
      name: 'E-waste',
      price: 25,
      imgUrl: waste
    },
    {
      id: 8,
      name: 'Polythene',
      price: 25,
      imgUrl: poly
    },
    {
      id: 9,
      name: 'Iron',
      price: 25,
      imgUrl: iron
    },


  ]

  return (
    <div className='main-list'><h1> Pricelist</h1>
      {
        items.map(item => (
          <div key={item.id} className="card">
<img src={item.imgUrl} alt={item.name}/>
<h2>{item.name}</h2>
<p>{item.price}</p>
          </div>
        ))
      };
    </div>
  )
}

export default Pricelist
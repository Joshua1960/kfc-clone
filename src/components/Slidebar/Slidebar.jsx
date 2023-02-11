import React from 'react'
import './Slidebar.css';
import KFC1 from '../img/kfc-nav1.png';
import KFC2 from '../img/kfc-nav2.png';
import KFC3 from '../img/kfc-nav3.png';
import KFC4 from '../img/kfc-nav4.png';
import KFC5 from '../img/kfc-nav5.png';
import KFC6 from '../img/kfc-nav6.png';
import KFC7 from '../img/kfc-nav7.png';
import KFC8 from '../img/kfc-nav8.png';

export default function Slidebar() {
  return (
    <div className='slidebar'>
      <div className="slidebar-title">MENUS</div>
          <div className="slider-content">
            <div className="slider">
              <div className="food-menu"><img src={KFC1} alt="" /></div>
              <div className="food-menu"><img src={KFC2} alt="" /></div>
              <div className="food-menu"><img src={KFC3} alt="" /></div>
              <div className="food-menu"><img src={KFC4} alt="" /></div>
              <div className="food-menu"><img src={KFC5} alt="" /></div>
              <div className="food-menu"><img src={KFC6} alt="" /></div>
              <div className="food-menu"><img src={KFC7} alt="" /></div>
              <div className="food-menu"><img src={KFC8} alt="" /></div>
            </div>
      </div>
    </div>
  )
}

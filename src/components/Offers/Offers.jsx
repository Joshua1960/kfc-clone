import React from 'react'
import './Offers.css';
import Ads from '../Ads/Ads';
import Hamburger from '../img/hamburger.png';
import Location from '../img/location.png';
import KFC1 from '../img/kfc-nav1.png';
import KFC2 from '../img/kfc-nav2.png';
import KFC4 from '../img/kfc-nav4.png';



export default function Offers() {
  return (
    <div className='offer'>
      <div className="ads-container">
        <div className='floatingdiv1'>
          <Ads image={Hamburger} txt1='ANY DAY OFFERS' txt2="NEW PHENOMENON BURGER TASTE" txt3="12.90 TL" clr1="color: red;"/>
        </div>
        <div className='floatingdiv1'>
          <Ads image={KFC1} txt1='ANY DAY OFFERS' txt2="NEW PHENOMENON BURGER TASTE" txt3="12.90 TL" clr1="color: red;"/>
        </div>
        <div className='floatingdiv1'>
          <Ads image={Location} txt1='ANY DAY OFFERS' txt2="NEW PHENOMENON BURGER TASTE" txt3="12.90 TL" clr1="color: red;"/>
        </div>
      </div>
      <div className="ads-container">
        <div className='floatingdiv1'>
          <Ads image={KFC2} txt1='ANY DAY OFFERS' txt2="NEW PHENOMENON BURGER TASTE" txt3="12.90 TL" clr1="color: red;"/>
        </div>
        <div className='floatingdiv1'>
          <Ads image={KFC4} txt1='ANY DAY OFFERS' txt2="NEW PHENOMENON BURGER TASTE" txt3="12.90 TL" clr1="color: red;"/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Topbar.css';
import Logo from '../img/logo.png';
import User from '../img/user.svg';
import Basket from '../img/basket.svg';
import KFC from '../img/kfc.png';

export default function Topbar() {
  return (
    <div className='topbar'>
      {/* TOPBAR TOP */}
      <div className="topbar-top">
        <div className="topbar-top-left">
          <img src={Logo} alt="" />
        </div>
        <div className="topbar-top-right">
          <div className="topbar-menu">
            <ul>
              <li>ABOUT US</li>
              <li>FIND US</li>
              <li>CAMPAIGN</li>
            </ul>
          </div>
          <div className="topbar-icons">
            <img src={User} alt="" />
            <img src={Basket} alt="" />
          </div>
        </div>
      </div>

      {/* TOPBAR BOTTOM */}
      <div className="topbar-bottom">
        <div className="topbar-bottom-left">
          <h1>BARGAIN<br/>BUCKET MENU<br/>CAMPAIGN</h1>
          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, exercitationem? Blanditiis exercitationem suscipit laborum quis repudiandae recusandae fugiat accusantium illo expedita tempora atque ducimus necessitatibus repellendus dolor, hic modi asperiores!</h6>
          <button>ORDER NOW</button>
        </div>
        <div className="topbar-bottom-right">
          <img src={KFC} alt="" />
        </div>
      </div>
    </div>
  )
}

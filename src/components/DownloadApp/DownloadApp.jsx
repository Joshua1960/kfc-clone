import React from 'react'
import './DownloadApp.css';
import Banner from '../img/banner.jpeg';
import Applestore from '../img/applestore.png';
import Playstore from '../img/playstore.png';

export default function DownloadApp() {
  return (
    <div className="maincont">
      <div className='dapp-container'>
        <div className="dapp-left">
          <img src={Banner} alt="" />
        </div>
        <div className="dapp-right">
          <p>Now WIth Your Favourite<br/>KFC Mobile Application<br/>In Your Pocket</p>
          <div className="downloadapp">
            <img src={Applestore} alt="" />
            <img src={Playstore} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

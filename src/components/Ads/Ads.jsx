import React from 'react'
import './Ads.css';

export default function Ads({image, txt1, txt2, txt3, clr1, color2, color3}) {
    return (
    <div className="Ads">
        <div className="Ads-text">
            <div className='txt'>{txt1}</div>
            <div className='txt'>{txt2}</div>
            <div className='txt'>{txt3}</div>
        </div>
        <div className="ads-image">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

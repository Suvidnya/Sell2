import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Ads.css'

const Ads = (props) => {
  const navigate= useNavigate();
  return (
    <>
        <div className='ads'>
            <img src={props.ads} alt="" />
        </div>
        <div className='sellBuyBtn'>
            <button>Sell Products</button>
            <button  onClick={()=>navigate("/view")}>Buy Products</button>
        </div>
    </>
  )
}

export default Ads

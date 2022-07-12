import React from 'react'

import './Ads.css'

const Ads = (props) => {
  return (
    <>
        <div className='ads'>
            <img src={props.ads} alt="" />
        </div>
        <div className='sellBuyBtn'>
            <button>Sell Products</button>
            <button>Buy Products</button>
        </div>
    </>
  )
}

export default Ads
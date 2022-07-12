import React from 'react';
import './secondrow.css'

export const Secondrow = () => {
  return (
    <>

    <div className="container-fluid px-5">
    <div className='row gx-5'>
    <div className='col-lg-6  col-12 secleftcolumn'>
        <div className='details'>
        <h3 id="proddetail">Product Details :</h3>
        <p id="proddetaitext">
        Rear Camera	Triple (50MP + 2MP + 2MP)<br/>
        Internal Memory	128 GB<br/>
        Screen Size	6.44 inches (16.36 cms)<br/>
        Battery Capacity	5000 mAh
        </p>    
        </div>
    </div>


    <div className='col-lg-6  col-12 secrightcolumn'>
        <div className='description'>
        <h3 id="proddesc">Product Description :</h3>
        <p id="proddesctext">The Vivo Y55 smartphone features a 6.44-inch AMOLED display with a Full HD+ resolution. The display has 20:9 aspect ratio and a pixel density of 409 PPI. Under the hood, the Y55 is powered by an octa-core Snapdragon 680 processor which is aided with 8GB of RAM. </p>

        </div>
    </div>

    </div>

    </div>
       
    </>
  )
}

import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <>
            <div className='carddiv'>
                <div className='fav'>
                    <img src={props.fav} alt="" />
                </div>
                <div className='cardImage'>
                    <img src={props.image} alt="" />
                </div>
                <div className='cardDetails'>
                    <div>
                        <p className='carddeatils-price'>₹ 7000</p>
                        <p className='carddeatils-title'>Lenovo Ryzen 7</p>
                        <p className='carddeatils-seller'>Nirupma Agrahari</p>
                    </div>
                    <div className='buy'>
                        <button>Buy</button>
                        <p>June 7</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
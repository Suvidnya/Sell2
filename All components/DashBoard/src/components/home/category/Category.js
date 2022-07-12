import React from 'react'
import './Category.css'

const Category = (props) => {
  return (
    <>
        <div className='category'>
            <h2>Browse Categories</h2>
            <div>
            <ul>
                <li><img src={props.electronic} alt="" /></li>
                <li><img src={props.bicycle} alt="" /></li>
                <li><img src={props.books} alt="" /></li>
                <li><img src={props.arrow} alt="" /></li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default Category
import React from 'react'
import Card from './card/Card'

import './Recomendations.css'


const Recomendations = (props) => {
  return (
    <>
      <div className='recomendations'>
        <h2>Recomendations</h2>
        <div className='grid'>
          
          <Card image={props.laptop} fav={props.fav} />
          <Card image={props.laptop} fav={props.fav} />
          <Card image={props.laptop} fav={props.fav} />
          <Card image={props.laptop} fav={props.fav} />
          <Card image={props.cycle} fav={props.fav} />
          <Card image={props.cycle} fav={props.fav} />
          <Card image={props.cycle} fav={props.fav} />
          <Card image={props.cycle} fav={props.fav} />
          <Card image={props.book} fav={props.fav} />
          <Card image={props.book} fav={props.fav} />
          <Card image={props.book} fav={props.fav} />
          <Card image={props.book} fav={props.fav} />


        </div>
        <div className='moreItems'>

          <button>More Items</button>
        </div>
      </div>
    </>
  )
}

export default Recomendations
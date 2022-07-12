import React from 'react'
import Ads from './ads/Ads'
import ads from '../images/add.png'

import Category from './category/Category'
import electronic from '../images/electronics.png'
import bicycle from '../images/bycycle.png'
import books from '../images/books.png'
import arrow from '../images/arrow.png'

import Recomendations from './recomendations/Recomendations'
import laptop from '../images/laptop.png'
import cycle from '../images/cycle.png'
import book from '../images/book.png'
import fav from '../images/fav.png'

const Home = () => {
  return (
    <>
    <Ads ads={ads}/>
    <Category electronic={electronic}  bicycle={bicycle} books={books} arrow={arrow}  />
    <Recomendations laptop={laptop} cycle={cycle} book={book} fav={fav}/>
    </>
  )
}

export default Home
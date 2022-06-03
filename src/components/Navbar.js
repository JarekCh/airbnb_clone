import React from 'react'
import airImg from '../img/airbnb.png'

function Navbar() {
  return (
    <nav>
        <img src={airImg} className='nav__logo'/>
    </nav>
  )
}

export default Navbar
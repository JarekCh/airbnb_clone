import React from 'react'
import airImg from '../img/airbnb.png'

function Navbar() {
  return (
    <nav>
        <img src={airImg} className='nav__logo' alt='logo'/>
    </nav>
  )
}

export default Navbar
import React from 'react'
import starIc from '../img/Star.png'
import katieImg from '../img/katie.png'

function Card() {
  return (
    <div className='card'>
        <img src={katieImg} className='card__img'/>
        <div className='card__stats'>
            <img src={starIc} className='card__star'/>
            <span>5.0</span>
            <span className='gray'>(6) • </span>
            <span className='gray'>USA</span> 
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card
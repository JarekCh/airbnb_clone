import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={require(`../img/${props.img}`)} className='card__img'/>
        <div className='card__stats'>
            <img src={require(`../img/Star.png`)} className='card__star'/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) • </span>
            <span className='gray'>{props.location}</span> 
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card
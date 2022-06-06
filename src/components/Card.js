import React from 'react'

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"        
    } else if(props.item.location === "Online") {
        badgeText = "Online"  
    }

    return (
        <div className='card'>
            {(props.item.openSpots === 0 
                || props.item.location === "Online") 
                &&  <div className='card__badge'>{badgeText}</div>}
            <img src={require(`../img/${props.item.coverImg}`)} className='card__img' alt='offer image'/>
            <div className='card__stats'>
                <img src={require(`../img/Star.png`)} className='card__star'/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span> 
            </div>
            <p className='card__title'>{props.item.title}</p>
            <p className='card__price'><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
  )
}

export default Card
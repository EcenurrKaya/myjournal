import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div className='card'>
        <img src={`../img/${props.item.img}`} className='card--img'/>
        <div className='card--text'>
           <span className='card--country'>{props.item.country} </span>
           <span className='card--human'>{props.item.human}</span>
           <h1>{props.item.title}</h1>
           <p className='card--country'>{props.item.date}</p>
           <p>{props.item.desc}</p> 
        </div>
    </div>
    <hr className='line'/>
    </div>
  )
}

export default Card
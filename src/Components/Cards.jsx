import React from 'react'
import './card.css'
import ThreeDot from '../assets/3 dot menu.svg'
import Avatar from './Avatar'
const Cards = ({ id, title, tags, user }) => {
    // console.log(user)
  return (
    <div className='cards'>
        <div className="card-header">
            <span>{id}</span>
            <Avatar name={user.name} />
        </div>
        <div className="card-body">
            {title}
        </div>
        <div className="card-footer">
            <img src={ThreeDot} />
            <span>{tags}</span>
        </div>
    </div>
  )
}

export default Cards
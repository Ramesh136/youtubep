import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return null 
  return (
    <div className='m-2'>
        <ul className=' p-2'>
          <Link to={"/"}><li className='font-bold'>Home</li></Link>
          <li>Shorts</li>
          <li>Trending </li>
        </ul>
        <ul className='mt-2  p-2'>
          <li className='font-bold'>Subscriptions</li>
          <li>Gamingboy</li>
          <li>Trendyz</li>
          <li>ThatPunchKid</li>
          <li>Tanmay Bhat </li>
        </ul>
        <ul className='mt-2  p-2'>
          <li className='font-bold'>Watch Later </li>
          <li>Playlist</li>
          <li>Games</li>
          <li>Music</li>
          <li>Music</li>
        </ul>

    </div>
  )
}

export default SideBar
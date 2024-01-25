import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return null 
  return (
    <div className='mt-14 m-2 border-r-2'>
        <ul className=' p-2  border-b-2 cursor-pointer'>
          <Link to={"/"}><li className='font-bold'>Home</li></Link>
          <Link to={'/search?q=Shorts'}><li className='p-2 hover:bg-gray-300 rounded-md'>Shorts</li></Link>
          <Link to={'/search?q=Trending'}><li className='p-2 hover:bg-gray-300 rounded-md'>Trending</li></Link>
          
        </ul>
        <ul className='mt-2  p-2 border-b-2 cursor-pointer'>
          <li className='font-bold'>Subscriptions</li>
          <Link to={'/search?q=Fireship'}><li className='p-2 hover:bg-gray-300 rounded-md'>Fire Ship</li></Link>
          <Link to={'/search?q=ThatPunchKid'}><li className='p-2 hover:bg-gray-300 rounded-md'>ThatPunchKid</li></Link>
          <Link to={'/search?q=Tanmay Bhat'}><li className='p-2 hover:bg-gray-300 rounded-md'>Tanmay Bhat</li></Link>
          <Link to={'/search?q=Memes'}><li className='p-2 hover:bg-gray-300 rounded-md'>Memes</li></Link>
        </ul>
        <ul className='mt-2  p-2 border-b-2 cursor-pointer'>
          <li className='font-bold'>Watch Later </li>
          <li className='p-2 hover:bg-gray-300 rounded-md'>Playlist</li>
          <li className='p-2 hover:bg-gray-300 rounded-md'>Games</li>
          <li className='p-2 hover:bg-gray-300 rounded-md'>Music</li>
          <li className='p-2 hover:bg-gray-300 rounded-md'>Music</li>
        </ul>

    </div>
  )
}

export default SideBar
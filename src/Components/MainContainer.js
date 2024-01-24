import React from 'react'
import VideoContainer from './VideoContainer'


const MainContainer = () => {

  
  return (
    <div
    className='m-4 '>
    <div className='p-2 space-x-5'>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>All</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Gaming</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Music</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Movies</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Kannada Fims</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Hero</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Sports</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>News</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>All</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Gaming</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Music</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Movies</button>
        <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Kannada Fims</button>
     </div>
       <VideoContainer /> 
    </div>
  )
}

export default MainContainer
import React from 'react'
import VideoContainer from './VideoContainer'
import { Link } from 'react-router-dom'


const MainContainer = () => {

  
  return (
    <div
    className='m-4 '>
    <div className='mt-14 p-2 space-x-5 h-12 w-full overflow-hidden'>
       <Link to={'/search?q=All'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>All</button></Link>
       <Link to={'/search?q=Gaming'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Gaming</button></Link>  
       <Link to={'/search?q=Music'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Music</button></Link> 
       <Link to={'/search?q=Movies'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Movies</button></Link>    
       <Link to={'/search?q=Kannada Films'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Kannada Fims</button></Link>
       <Link to={'/search?q=Hero'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Hero</button></Link> 
       <Link to={'/search?q=Sports'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Sports</button></Link>           
       <Link to={'/search?q=News'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>News</button></Link>   
       <Link to={'/search?q=Gaming'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Gaming</button></Link>    
       <Link to={'/search?q=Music'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Music</button></Link>    
       <Link to={'/search?q=Movies'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Movies</button></Link> 
       <Link to={'/search?q=Kannada'}> <button className='rounded-lg bg-gray-300 p-2 hover:bg-gray-400'>Kannada Fims</button></Link>     
     </div>
       <VideoContainer /> 
    </div>
  )
}

export default MainContainer
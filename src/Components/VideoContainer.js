import React, { useEffect, useState } from 'react'
import { youtube_data } from '../utils/api'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'






const VideoContainer = () => {

  const [videos , setVideos] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const  fetchData = async  ()=>{
      const data = await fetch(youtube_data)
      const video_data = await data.json()
      setVideos(video_data.items)
      console.log(video_data.items)
    }

    if(videos.length===0)
      return null

  return (
    <div className='flex flex-wrap'>
       {videos.map((video)=>{
          return <Link to={'/watch?v='+video.id} key={video.id}><VideoCard  data={video}/></Link>
        })}
    </div>
   
    
  )
}

export default VideoContainer
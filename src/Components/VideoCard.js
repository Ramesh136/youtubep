import React from 'react'

const VideoCard = ({data}) => {

const {snippet , statistics} = data
const {channelTitle ,title ,thumbnails} = snippet

  return (
    <div className='m-3 p-2 w-72  shadow-md'>
        <img alt={"video_thumbnail"} src={thumbnails.medium.url}
            className='rounded-md'
        />
        <ul>
            <li className='pt-2'>{title}</li>
            <li className='font-bold'>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
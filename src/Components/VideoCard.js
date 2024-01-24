import React from 'react'

const VideoCard = ({data}) => {

const {snippet , statistics} = data
const {channelTitle ,title ,thumbnails} = snippet

  return (
    <div className='m-3 p-2 w-72  border-2 rounded'>
        <img alt={"video_thumbnail"} src={thumbnails.medium.url}
            className='rounded-md'
        />
        <ul>
            <li className='pt-2 line-clamp-2 text-md'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li className='text-gray-400'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
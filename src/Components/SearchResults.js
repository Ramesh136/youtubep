import React, { useEffect, useState } from 'react'
import {Link, useSearchParams } from 'react-router-dom'
import { api_key, search_api } from '../utils/api'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

function SearchResults() {

    const [searchParams] = useSearchParams()
    const [videoList , setVideoList] = useState([])
    const dispatch = useDispatch()

    const search = searchParams.get('q')

    useEffect(()=>{
        getSearchResults()
        dispatch(closeMenu())
    } ,[search])

    const getSearchResults = async ()=>{

        const data = await fetch(search_api+search+api_key)
        const json = await data.json()
        console.log(json.items)
        console.log(search)
        setVideoList(json.items)
    }

  return (
    <div className='mt-14 pt-6'>

       <div>
        {videoList?.length!=0 && videoList?.map((video)=>{
         return <Link key={video.id.videoId} to={'/watch?v='+video?.id?.videoId}>
         <div  className='flex p-2'>
            <img src={video?.snippet?.thumbnails?.medium?.url} className='rounded-md border' alt={video?.snippet?.title}/>
            <div className='p-2 space-y-2'>
                <h2 className='text-lg font-semibold'>{video?.snippet?.title}</h2>
                <h2 className='text-gray-600 text-md'>By  {video?.snippet?.channelTitle}</h2>
                <h2 className='line-clamp-2 text-gray-500'>{video?.snippet?.description}</h2>
            </div>
         </div>   
         
         </Link>
         
        })}
        </div> 
        
    </div>
  )
}

export default SearchResults
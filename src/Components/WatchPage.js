import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const [searchParams] = useSearchParams()

  const dispatch = useDispatch()
  dispatch(closeMenu())

  const id = searchParams.get("v")
  console.log(id)
  return (
    <div className='m-14 py-4 rounded-md'><iframe width="900" height="506" className='rounded-md' src={"https://www.youtube.com/embed/"+ id +"?si=CRACb-SYYghAQcce"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  )
}

export default WatchPage
import React from 'react'
import SideBar from './SideBar'
import {Outlet} from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div className='flex m-2'>
        <Header />
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body
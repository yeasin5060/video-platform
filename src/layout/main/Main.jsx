import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../sitebar/Sidebar'

const Main = () => {
  return (
    <>
        <Navbar/>
        <Sidebar/>
            <Outlet/>
    </>
  )
}

export default Main
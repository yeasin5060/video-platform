import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <Navbar/>
            <Outlet/>
    </>
  )
}

export default Main
import React from 'react'
import Sidebarnavlink from '../../component/sidebarnavlink/Sidebarnavlink'
import { IoHome } from "react-icons/io5";


const Sidebarhome = () => {
  return (
    <div className='sidebarhome'>
        <Sidebarnavlink icon={<IoHome />} linktext='home' link=''/>
    </div>
  )
}

export default Sidebarhome
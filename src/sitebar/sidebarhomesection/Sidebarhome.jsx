import React from 'react'
import Sidebarnavlink from '../../component/sidebarnavlink/Sidebarnavlink'
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaTrashRestore } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import './Sidebarhome.css'


const Sidebarhome = () => {
  return (
    <div className='sidebarhome'>
        <Sidebarnavlink icon={<IoHome />} linktext='home' link=''/>
        <Sidebarnavlink icon={<FaTrashRestore />} linktext='store' link=''/>
        <Sidebarnavlink icon={<MdOutlineSubscriptions />} linktext='subscription' link=''/>
    </div>
  )
}

export default Sidebarhome
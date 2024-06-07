import React from 'react'
import Sidebarnavlink from '../../component/sidebarnavlink/Sidebarnavlink'
import { MdOutlineSettings } from "react-icons/md";
import { IoFlagOutline } from "react-icons/io5";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { AiOutlineFileExclamation } from "react-icons/ai";
import './Sidebarsetting.css'

const Sidebarsetting = () => {
  return (
    <div className='sidebar-setting-box'>
        <Sidebarnavlink icon={<MdOutlineSettings />} linktext='setting' link=''/>
        <Sidebarnavlink icon={<IoFlagOutline />} linktext='report history' link=''/>
        <Sidebarnavlink icon={<AiTwotoneQuestionCircle />} linktext ='help'  link = ''/> 
        <Sidebarnavlink icon={<AiOutlineFileExclamation />} linktext='sendfeedback' link=''/>
    </div>
  )
}

export default Sidebarsetting
import React from 'react'
import Nanohead from '../../utilities/Nanohead'
import Pera from '../../utilities/Pera'
import profile from '../../images/profile.jpg'
import { Link } from 'react-router-dom'
import Sidebarnavlink from '../sidebarnavlink/Sidebarnavlink'
import { FaGoogle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import './Userdashboard.css'

const Userdashboard = ({userdashboard}) => {
  return (
    <div className={userdashboard}>
        <div className='userdash-profile-box-flex'>
            <div className='userdash-profile-box'>
                <img src={profile}  alt='not found'/>
            </div>
            <div className='userdash-name-box'>
                <Nanohead text='yeasun munshi' style='userdash-name-head'/>
                <Pera text="yeasin.munshi@gmail.com" style="userdash-email"/>
                <div className='user-channel-box'>
                  <Link className= "user-create-channel" to="">Create a channel</Link>
                </div>
            </div>
        </div>
        <div className='userdash-account-link-box'>
          <Sidebarnavlink icon={<FaGoogle />} linktext='google' link=''/>
          <Sidebarnavlink icon={<MdAccountCircle />} linktext='Switch account' link=''/>
          <Sidebarnavlink icon={<MdLogout />} linktext='Sign out' link=''/>
        </div>
        <div className='userdash-location-link-box'>
          <Sidebarnavlink icon={<MdOutlineAccountBox />} linktext='Your data in Video-Platform' link=''/>
          <Sidebarnavlink icon={<FaRegMoon />} linktext='Device Theme' link=''/>
          <Sidebarnavlink icon={<FaLocationDot />} linktext='Location : Bangladesh' link=''/>
        </div>
        <div className='userdash-settion-box'>
          <Sidebarnavlink icon={<IoSettings />} linktext='Settings' link=''/>
        </div>
    </div>
  )
}

export default Userdashboard
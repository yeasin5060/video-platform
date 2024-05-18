import React from 'react'
import Nanohead from '../../utilities/Nanohead'
import Pera from '../../utilities/Pera'
import profile from '../../images/profile.jpg'
import './Userdashboard.css'
import { Link } from 'react-router-dom'
import Sidebarnavlink from '../sidebarnavlink/Sidebarnavlink'
import { FaGoogle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";

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
        <div className='userdash-all-link-box'>
          <Sidebarnavlink icon={<FaGoogle />} linktext='google' link=''/>
          <Sidebarnavlink icon={<MdAccountCircle />} linktext='Switch account' link=''/>
          <Sidebarnavlink icon={<MdLogout />} linktext='Sign out' link=''/>
        </div>
    </div>
  )
}

export default Userdashboard
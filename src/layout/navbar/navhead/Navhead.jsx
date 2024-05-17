import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import logo from '../../../images/videologo.png'
import profile from '../../../images/profile.jpg'
import { Link } from 'react-router-dom';

const Navhead = () => {
  return (
    <div className='navbar-wrap'>
        <div className='navbar-logo-box'>
            <div className='navbar-logo'>
                <img src={logo} alt='not found' />
            </div>
        </div>
        <div className='head-search-box-flex'>
            <div className='search-input-box'>
                <input className='head-search' type=" search" placeholder="search" />
            </div>
            <div className='search-voice-box'>
                <IoMdMic className='search-vouce' />
            </div>
        </div>
        <div className='head-profile-box-flex'>
            <div className='head-profile-login-box'>
                <Link className='head-profile-login' to='login'>login</Link>
            </div>
            <div className='head-notification-box'>
                <IoMdNotificationsOutline className='head-notification' />
            </div>
            <div className='head-profile-box'>
                <img src={profile}  alt='not found'/>
            </div>
        </div>
    </div>
  )
}

export default Navhead
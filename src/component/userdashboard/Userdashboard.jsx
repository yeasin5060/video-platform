import React from 'react'
import Nanohead from '../../utilities/Nanohead'
import Pera from '../../utilities/Pera'
import profile from '../../images/profile.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Sidebarnavlink from '../sidebarnavlink/Sidebarnavlink'
import { FaGoogle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, signOut , } from "firebase/auth";
import { userdata } from '../../creatslice/userdetails'
import './Userdashboard.css'

const Userdashboard = ({userdashboard}) => {
  const alldata = useSelector((state) => state.userdata.value)
  const auth = getAuth()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log( alldata);
  let handlesingout = ()=>{
    signOut(auth).then(()=>{
        localStorage.removeItem("user");
        dispatch(userdata(null));
        navigate("/");
    })
}
  return (
    <div className={userdashboard}>
        <div className='userdash-profile-box-flex'>
            <div className='userdash-profile-box'>
                <img src={alldata ? alldata.photoURL : profile}  alt='not found'/>
            </div>
            <div className='userdash-name-box'>
                <Nanohead text={alldata ? alldata.displayName : ''} style='userdash-name-head'/>
                <Pera text={alldata ? alldata.email: ''} style="userdash-email"/>
                <div className='user-channel-box'>
                  <Link className= "user-create-channel" to="">Create a channel</Link>
                </div>
            </div>
        </div>
        <div className='userdash-account-link-box'>
          <Sidebarnavlink icon={<FaGoogle />} linktext='google' link=''/>
          <Sidebarnavlink icon={<MdAccountCircle />} linktext='Switch account' link=''/>
          <div className='sign-out-box'>
            <MdLogout className='sign-out-box-icon'/>
            <button className='sign-out-box-btn' onClick={handlesingout} >sign out</button>
          </div>
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
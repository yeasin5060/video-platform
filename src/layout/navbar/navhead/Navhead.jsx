import { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import logo from '../../../images/videologo.png'
import profile from '../../../images/profile.jpg'
import Userdashboard from '../../../component/userdashboard/Userdashboard';
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { searchTage } from '../../../creatslice/filterslice';
import { getAuth, signOut } from "firebase/auth";
import { userdata } from '../../../creatslice/userdetails';
import { useNavigate } from 'react-router-dom';

const Navhead = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [inputSearchVal , setInputSearchVal] = useState("")
    let [active , setActive] = useState("")
    let userdetails = document.querySelector(".userdashboard-contant-box")
    let userDash = ()=>{
        setActive(userdetails)
       if(active == null){
        console.log("loding");
       }else{
        active.classList.toggle("active")
       }
    }


    let handleSearchVal = (value)=>{
        setInputSearchVal(value);
    }
    let handleSearch = ()=>{
        dispatch(searchTage(inputSearchVal))
        setInputSearchVal("")
    }

                //sign out function

    let singOut = ()=>{
        signOut(auth).then(() => {
           localStorage.removeItem("user")
           dispatch(userdata(null))
           navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='navbar-wrap'>
        <div className='navbar-logo-box'>
            <div className='navbar-logo'>
                <img src={logo} alt='not found' />
            </div>
        </div>
        <div className='head-search-box-flex'>
            <div className='search-input-box'>
                <input className='head-search' type="search" placeholder="search" value={inputSearchVal} onChange={(e)=> handleSearchVal(e.target.value)} />
                <IoSearchSharp className='search-icon' onClick={handleSearch} />
            </div>
            <div className='search-voice-box'>
                <IoMdMic className='search-vouce' />
            </div>
        </div>
        <div className='head-profile-box-flex'>
            <div className='head-profile-login-box'>
                <button className='head-profile-login' onClick={singOut}>sing out</button>
            </div>
            <div className='head-notification-box'>
                <IoMdNotificationsOutline className='head-notification' />
            </div>
            <div className='head-profile-box' onClick={userDash}>
                <img src={profile} alt="not found" />
            </div>
            <Userdashboard userdashboard="userdashboard-contant-box"/>
        </div>
    </div>
  )
}

export default Navhead
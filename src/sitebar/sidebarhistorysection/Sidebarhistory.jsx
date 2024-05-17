import React from 'react'
import { Link } from 'react-router-dom'
import Sidebarnavlink from '../../component/sidebarnavlink/Sidebarnavlink';
import { MdPlaylistPlay } from "react-icons/md";
import { GoStopwatch } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import './Sidebarhistory.css'

const Sidebarhistory = () => {
  return (
    <div className='sidebarhistory-box'>
      <div className='users-details-box'>
        <Link className='users-ditails' to = ''>you</Link>
        <div className='uesr-details-icon'>
          <MdArrowForwardIos />
        </div>
      </div>
        <Sidebarnavlink icon={<MdOutlineWatchLater />} linktext='history' link=''/>
        <Sidebarnavlink icon={<MdPlaylistPlay />} linktext='playlists' link=''/>
        <Sidebarnavlink icon={<GoStopwatch />} linktext ='watch later'  link = ''/> 
        <Sidebarnavlink icon={<SlLike />} linktext='likeds videos' link=''/>
    </div>
  )
}

export default Sidebarhistory
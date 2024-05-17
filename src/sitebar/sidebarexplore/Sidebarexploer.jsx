import React from 'react'
import Sidebarnavlink from '../../component/sidebarnavlink/Sidebarnavlink'
import { IoIosMusicalNote } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import { Link } from 'react-router-dom';
import './Sidebarexploer.css'

const Sidebarexploer = () => {
  return (
    <div className='sidebarexploer-box'>
      <div className='exploer-details-box'>
        <Link className='exploer-ditails' to = ''>explor</Link>
      </div>
        <Sidebarnavlink icon={<IoMdTrendingUp />} linktext='trending' link=''/>
        <Sidebarnavlink icon={<IoIosMusicalNote />} linktext='music' link=''/>
        <Sidebarnavlink icon={<SiYoutubegaming />} linktext ='gaming'  link = ''/> 
        <Sidebarnavlink icon={<GoTrophy />} linktext='sport' link=''/>
    </div>
  )
}

export default Sidebarexploer
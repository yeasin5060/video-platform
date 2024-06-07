import React from 'react'
import {Link } from 'react-router-dom'
import './Sidebarnavlink.css'

const Sidebarnavlink = ({link , linktext , icon}) => {
  return (
    <div className='navlink'>
        <div className='navlink-icon-box'>
            {icon}
        </div>
        <Link className='navlink-style' to={link}>{linktext}</Link>
    </div>
  )
}

export default Sidebarnavlink
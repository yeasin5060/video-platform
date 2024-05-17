import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebarnavlink.css'

const Sidebarnavlink = ({link , linktext , icon}) => {
  return (
    <div className='navlink'>
        <div className='navlink-icon-box'>
            {icon}
        </div>
        <NavLink className='navlink-style' to={link}>{linktext}</NavLink>
    </div>
  )
}

export default Sidebarnavlink